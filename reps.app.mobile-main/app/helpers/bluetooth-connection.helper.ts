import { bluetoothConfig } from 'config/bluetooth.config';
import { getConnectedPeripherals } from 'db/bluetooth.db';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { BluetoothPeripheralPayload } from 'models/bluetooth.model';
import {
  isPeripheralConnectingSubject$,
  peripheralsStateSubject$,
} from 'streams/bluetooth.stream';

import BleManager from '../../BleManager';

import {
  handleConnectedPeripheral,
  handleWatchedPeripheral,
} from './bluetooth-stream.helper';
import { resolver } from './promise-resolver.helper';

async function watchSinglePeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  handleWatchedPeripheral(peripheral);
}

async function connectAndSubscribeToSinglePeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  // Console.log(`Attempting to connect to peripheral:  ${peripheral.id}`);

  const [isPeripheralConnected, isPeripheralConnectedError] = await resolver(
    BleManager.isPeripheralConnected(peripheral.id),
  );

  if (isPeripheralConnectedError) {
    isPeripheralConnectingSubject$.next({
      isConnecting: false,
      peripheralId: peripheral.id,
    });

    throw new Error(isPeripheralConnectedError);
  }

  if (isPeripheralConnected) {
    isPeripheralConnectingSubject$.next({
      isConnecting: false,
      peripheralId: peripheral.id,
    });

    // Console.log('Peripheral already connected, skipping connection...');

    return;
  }

  isPeripheralConnectingSubject$.next({
    isConnecting: true,
    peripheralId: peripheral.id,
  });

  const [, connectError] = await resolver(BleManager.connect(peripheral.id));

  if (connectError) {
    isPeripheralConnectingSubject$.next({
      isConnecting: false,
      peripheralId: peripheral.id,
    });

    throw new Error(connectError);
  }

  // Console.log('Retrieving services...');
  const [, retrieveServicesError] = await resolver(
    BleManager.retrieveServices(peripheral.id),
  );

  if (retrieveServicesError) {
    isPeripheralConnectingSubject$.next({
      isConnecting: false,
      peripheralId: peripheral.id,
    });

    throw new Error(retrieveServicesError);
  }

  // Console.log('Starting notification for last throw stats...');
  const [, startNotificationLastThrowStatsError] = await resolver(
    BleManager.startNotification(
      peripheral.id,
      bluetoothConfig.rootServiceUUID,
      bluetoothConfig.characteristicUUIDs.lastThrowStats,
    ),
  );

  if (startNotificationLastThrowStatsError) {
    isPeripheralConnectingSubject$.next({
      isConnecting: false,
      peripheralId: peripheral.id,
    });

    throw new Error(startNotificationLastThrowStatsError);
  }

  // Console.log('handleConnectedPeripheral');
  isPeripheralConnectingSubject$.next({
    isConnecting: false,
    peripheralId: peripheral.id,
  });
  handleConnectedPeripheral(peripheral);
}

export async function connectAndSubscribeToPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  // Console.log('Scanning for peripherals...');
  const [, scanError] = await resolver(
    BleManager.scan(
      bluetoothConfig.publicServiceUUIDs,
      bluetoothConfig.scanForSeconds,
      false,
    ),
  );

  if (scanError) {
    console.error(scanError);
  }

  connectAndSubscribeToSinglePeripheral(peripheral);
}

export async function watchPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  watchSinglePeripheral(peripheral);
}

export async function connectAndSubscribeToPeripherals(
  peripherals: Array<BluetoothPeripheralPayload>,
): Promise<void> {
  // Console.log('Scanning for peripherals...');
  const [, scanError] = await resolver(
    BleManager.scan(
      bluetoothConfig.publicServiceUUIDs,
      bluetoothConfig.scanForSeconds,
      false,
    ),
  );

  if (scanError) {
    console.error(scanError);
  }

  peripherals.forEach((peripheral) => {
    connectAndSubscribeToSinglePeripheral(peripheral);
  });
}

export async function getActivelyConnectedPeripherals(): Promise<
  Array<BluetoothPeripheralPayload>
> {
  const connectedPeripherals = await BleManager.getConnectedPeripherals([]);

  // Console.log(connectedPeripherals);

  return connectedPeripherals;
}

export async function attemptToConnectAndSubscribeToAllStoredConnectedPeripherals(): Promise<void> {
  const storedConnectedPeripherals = Object.values(
    (await getConnectedPeripherals()) || {},
  );

  const activelyConnectedPeripherals = await getActivelyConnectedPeripherals();

  const activelyConnectedPeripheralIds = activelyConnectedPeripherals.map(
    (peripheral) => peripheral.id,
  );

  const uniquePeripheralsToConnect: Array<BluetoothPeripheralPayload> =
    storedConnectedPeripherals.reduce(
      (
        acc: Array<BluetoothPeripheralPayload>,
        peripheral: BluetoothPeripheralPayload,
      ) => {
        if (!activelyConnectedPeripheralIds.includes(peripheral.id)) {
          acc = [...acc, peripheral];
        }

        return acc;
      },
      [],
    );

  // Console.log('uniquePeripheralsToConnect', uniquePeripheralsToConnect);

  uniquePeripheralsToConnect.forEach((peripheral) => {
    peripheralsStateSubject$.next({
      peripheral: peripheral,
      state: BluetoothPeripheralState.PREVIOUSLY_CONNECTED,
    });
  });

  connectAndSubscribeToPeripherals(uniquePeripheralsToConnect);
}

export async function disconnectFromPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  // Console.log(`Attempting to disconnect from peripheral:  ${peripheral.id}`);

  const [, disconnectError] = await resolver(
    BleManager.disconnect(peripheral.id),
  );

  if (disconnectError) {
    // Console.log(disconnectError);
  }
}

export async function retryPreviousConnections(
  count: number = 0,
): Promise<void> {
  if (count > 20) {
    return;
  }

  setTimeout(() => {
    attemptToConnectAndSubscribeToAllStoredConnectedPeripherals();
    retryPreviousConnections(count + 1);
  }, 10000);
}
