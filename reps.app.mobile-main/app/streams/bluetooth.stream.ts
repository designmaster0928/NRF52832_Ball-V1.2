import { merge } from 'lodash';

import {
  animationFrameScheduler,
  distinct,
  filter,
  map,
  Observable,
  observeOn,
  scan,
  shareReplay,
  Subject,
  tap,
} from 'rxjs';

import { bluetoothConfig } from 'config/bluetooth.config';
import {
  getWatchedPeripherals,
  removeWatchedPeripheral,
  saveWatchedPeripheral,
} from 'db/bluetooth.db';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { parseShotData } from 'helpers/ball.helper';
import { addRxjsObservableToBeSubscribed } from 'helpers/rxjs-subscription.helper';
import { ShotPayload } from 'models/ball.model';
import {
  BluetoothCharacteristicValuePayload,
  BluetoothPeripheralConnectionPayload,
  BluetoothPeripheralPayload,
  BluetoothPeripheralStatePayload,
} from 'models/bluetooth.model';

export const isBluetoothScanning$ = new Subject<boolean>();

/*
 * This is a subject that is used to emit discovered peripherals
 * to the app. This is used to update the UI when a peripheral
 * is discovered.
 */

export const discoveredPeripheralsSubject$ =
  new Subject<BluetoothPeripheralPayload>();

export const discoveredPeripherals$ = discoveredPeripheralsSubject$.pipe(
  filter((peripheral) => {
    if (peripheral?.advertising?.isConnectable === 1) {
      return true;
    }
    return false;
  }),
  tap((peripheral) => {
    peripheralsStateSubject$.next({
      peripheral,
      state: BluetoothPeripheralState.DISCOVERED,
    });
  }),
);

addRxjsObservableToBeSubscribed(discoveredPeripherals$);

export const isPeripheralConnectingSubject$ =
  new Subject<BluetoothPeripheralConnectionPayload>();

export const isPeripheralConnecting$: Observable<Array<string>> =
  isPeripheralConnectingSubject$.pipe(
    scan(
      (
        accumulator: Array<string>,
        current: {
          peripheralId: string;
          isConnecting: boolean;
        },
      ): Array<string> => {
        if (current.isConnecting) {
          accumulator = [...accumulator, current.peripheralId];
        } else {
          accumulator = accumulator.filter((id) => id !== current.peripheralId);
        }

        return accumulator;
      },
      [],
    ),
  );

export const characteristicValuesSubject$ =
  new Subject<BluetoothCharacteristicValuePayload>();

export const characteristicValues$ = characteristicValuesSubject$.pipe(
  filter(
    (payload: BluetoothCharacteristicValuePayload) =>
      payload?.characteristicUUID ===
        bluetoothConfig.characteristicUUIDs.lastThrowStats &&
      // Expected total bytes for lastThrowStats is 20
      payload?.value.length === 20,
  ),
  map((payload: BluetoothCharacteristicValuePayload): ShotPayload => {
    const shotData = parseShotData(payload.value);

    return {
      id: payload.peripheralUUID,
      shotData: shotData,
      uniqueShotId: `${payload.peripheralUUID}-${shotData.shots}`,
    };
  }),
  distinct((data: ShotPayload) => data.uniqueShotId),
);

export const advertisementValues$ = discoveredPeripheralsSubject$.pipe(
  filter((data: BluetoothPeripheralPayload) => {
    if (!data?.advertising?.manufacturerData?.bytes) {
      return false;
    }

    const watchedPeripherals = getWatchedPeripherals();
    if (watchedPeripherals) {
      const watchedPeripheralIds = Object.values(watchedPeripherals).map(
        (peripheralPayload) => peripheralPayload.peripheral.id,
      );

      if (watchedPeripheralIds.includes(data.id)) {
        return true;
      }
    }

    return false;
  }),
  map((data: BluetoothPeripheralPayload): ShotPayload => {
    const shotData = parseShotData(data.advertising.manufacturerData.bytes, 2);

    return {
      id: data.id,
      shotData: shotData,
      uniqueShotId: `${data.id}-${shotData.shots}`,
    };
  }),
  distinct((data: ShotPayload) => data.uniqueShotId),
);

export const peripheralsStateSubject$ =
  new Subject<BluetoothPeripheralStatePayload>();

export const peripheralsState$ = peripheralsStateSubject$.pipe(
  // ObserveOn(animationFrameScheduler),
  scan(
    (
      accumulator: Map<string, BluetoothPeripheralStatePayload>,
      current: {
        state: BluetoothPeripheralState;
        peripheral: BluetoothPeripheralPayload;
      },
    ) => {
      if (!current?.peripheral || !current?.peripheral?.id) {
        return accumulator;
      }

      if (current.state === BluetoothPeripheralState.FORGOTTEN) {
        accumulator.delete(current?.peripheral?.id);
        removeWatchedPeripheral(current);

        return accumulator;
      }

      const storedPeripheral: BluetoothPeripheralStatePayload | null =
        accumulator.get(current.peripheral.id) || null;

      if (
        storedPeripheral?.state === BluetoothPeripheralState.WATCHED &&
        current.state === BluetoothPeripheralState.DISCOVERED
      ) {
        return accumulator;
      }

      /*
       * If (current.state === BluetoothPeripheralState.WATCHED) {
       *   saveWatchedPeripheral(current);
       * }
       */

      accumulator.set(current.peripheral.id, merge(storedPeripheral, current));

      return accumulator;
    },
    new Map(Object.entries(getWatchedPeripherals() || {})),
  ),
  distinct(),
  tap((peripherals) => {
    console.log('peripherals', peripherals);
  }),
  // ShareReplay(1),
);

addRxjsObservableToBeSubscribed(peripheralsState$);
