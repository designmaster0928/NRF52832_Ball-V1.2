import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import {
  BleScanCallbackType,
  BleScanMatchMode,
  BleScanMode,
} from 'react-native-ble-manager';

import { bluetoothConfig } from 'config/bluetooth.config';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { BluetoothPeripheralPayload } from 'models/bluetooth.model';
import {
  isBluetoothScanning$,
  peripheralsStateSubject$,
} from 'streams/bluetooth.stream';

import BleManager from '../../BleManager';

import {
  handleDisconnectedPeripheral,
  handleDiscoverPeripheral,
  handleDiscoverPeripherals,
  handleIsBluetoothScanning,
  handleUpdatedCharacteristicValue,
} from './bluetooth-stream.helper';
import { requestBlePermissions } from './permissions.helper';
import { resolver } from './promise-resolver.helper';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

let isScanning = false;
let isScanningLoop = false;

const bleManagerEvents: Array<[string, (data: any) => void]> = [
  [
    'BleManagerDiscoverPeripheral',
    (peripheral: BluetoothPeripheralPayload): void => {
      handleDiscoverPeripheral(peripheral, !isScanningLoop);
    },
  ],
  ['BleManagerStopScan', handleStopScan],
  ['BleManagerDisconnectPeripheral', handleDisconnectedPeripheral],
  [
    'BleManagerDidUpdateValueForCharacteristic',
    handleUpdatedCharacteristicValue,
  ],
];

let bleManagerInitializedEvents: Array<EmitterSubscription> = [];

export async function bootstrapBle(): Promise<void> {
  isScanning = false;
  isScanningLoop = false;

  const [, requestBlePermissionsError] = await resolver(
    requestBlePermissions(),
  );

  if (requestBlePermissionsError) {
    console.log('requestBlePermissionsError: ' + requestBlePermissionsError);
  }

  const [, startError] = await resolver(BleManager.start({ showAlert: false }));

  if (startError) {
    throw new Error(startError);
  }

  bleManagerInitializedEvents = bleManagerEvents.map(([eventName, handler]) => {
    return bleManagerEmitter.addListener(eventName, handler);
  });
}

export function tearDownBle(): void {
  isScanning = false;
  isScanningLoop = false;
  bleManagerInitializedEvents.forEach((event) => event.remove());
}

export async function startScan(
  shouldLoop?: boolean,
  scanForSecondsOverride?: number,
): Promise<void> {
  if (isScanning) {
    return;
  }

  isScanning = true;

  const [, scanError] = await resolver(
    BleManager.scan(
      bluetoothConfig.publicServiceUUIDs,
      scanForSecondsOverride || bluetoothConfig.scanForSeconds,
      true,
      {
        callbackType: BleScanCallbackType.AllMatches,
        matchMode: BleScanMatchMode.Sticky,
        scanMode: BleScanMode.LowLatency,
      },
    ),
  );
  if (scanError) {
    console.error(scanError);
  }

  if (shouldLoop) {
    isScanningLoop = true;
  }

  isBluetoothScanning$.next(true);
}

export async function stopScan(): Promise<void> {
  isScanning = false;
  isScanningLoop = false;

  const [, stopScanError] = await resolver(BleManager.stopScan());

  if (stopScanError) {
    throw new Error(stopScanError);
  }
}

export async function getDiscoveredPeripherals(): Promise<
  Array<BluetoothPeripheralPayload>
> {
  const [discoveredPeripherals, discoveredPeripheralsError] = await resolver(
    BleManager.getDiscoveredPeripherals(),
  );

  if (discoveredPeripheralsError) {
    console.error(discoveredPeripheralsError);
  }

  return discoveredPeripherals;
}

export async function handleStopScan(): Promise<void> {
  isScanning = false;

  if (isScanningLoop) {
    setTimeout(() => {
      startScan(true);
    }, 100);
  } else {
    handleIsBluetoothScanning(false);
  }

  const [discoveredPeripherals] = await resolver(getDiscoveredPeripherals());

  handleDiscoverPeripherals(discoveredPeripherals);
}

export async function forgetPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  peripheralsStateSubject$.next({
    peripheral,
    state: BluetoothPeripheralState.FORGOTTEN,
  });
}
