import {
  saveDiscoveredPeripheral,
  saveWatchedPeripheral,
} from 'db/bluetooth.db';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { BluetoothPeripheralPayload } from 'models/bluetooth.model';
import {
  characteristicValuesSubject$,
  discoveredPeripheralsSubject$,
  isBluetoothScanning$,
  peripheralsStateSubject$,
} from 'streams/bluetooth.stream';

export async function handleConnectedPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  // Console.log('Connected to: ' + peripheral.id);

  peripheralsStateSubject$.next({
    peripheral,
    state: BluetoothPeripheralState.CONNECTED,
  });
}

export async function handleWatchedPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  saveWatchedPeripheral(peripheral);

  // peripheralsStateSubject$.next({
  //   peripheral,
  //   state: BluetoothPeripheralState.WATCHED,
  // });
}

export function handleDisconnectedPeripheral(
  data: Partial<{ peripheral: string }>,
): void {
  // Console.log('Disconnected from: ' + data.peripheral);

  peripheralsStateSubject$.next({
    peripheral: {
      id: data.peripheral || '',
    } as any,
    state: BluetoothPeripheralState.PREVIOUSLY_CONNECTED,
  });
}

export function handleDiscoverPeripheral(
  peripheral: BluetoothPeripheralPayload,
  shouldSave?: boolean,
): void {
  /*x
   * If (peripheral.id === 'c6939055-deef-9118-0e79-f7c153d72d29') {
   *   console.log('Discovered: ', JSON.stringify(peripheral, null, 2));
   * }
   */
  // console.log('Discovered: ', JSON.stringify(peripheral, null, 2));
  // console.log('WTF!');

  if (shouldSave) {
    saveDiscoveredPeripheral(peripheral);
  }

  discoveredPeripheralsSubject$.next(peripheral);
}

export function handleDiscoverPeripherals(
  peripherals: Array<BluetoothPeripheralPayload>,
): void {
  peripherals.forEach((peripheral) => {
    handleDiscoverPeripheral(peripheral);
  });
}

export function handleIsBluetoothScanning(isScanning: boolean): void {
  isBluetoothScanning$.next(isScanning);
}

export function handleUpdatedCharacteristicValue(payload: {
  characteristic: string;
  peripheral: string;
  value: any;
}): void {
  // Console.log('handleUpdatedCharacteristicValue: ', payload);

  characteristicValuesSubject$.next({
    characteristicUUID: payload.characteristic,
    peripheralUUID: payload.peripheral,
    value: payload.value,
  });
}
