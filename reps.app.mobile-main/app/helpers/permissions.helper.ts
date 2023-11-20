import { Platform } from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';

import { StorageKey } from 'enums/storage.enum';

import { enableBluetooth } from '../../BleManager';

import { getValue, storeValue } from './storage.helper';

type PermissionCallback = (isGranted: boolean) => void;

function handlePermissionResponse(
  statuses: Record<string, PermissionStatus>,
  callback?: PermissionCallback,
): boolean {
  const isGranted = Object.values(statuses).every(
    (status) => status === RESULTS.GRANTED,
  );

  storeValue(StorageKey.BLUETOOTH_PERMISSION_ALLOWED, 'true');

  if (callback) {
    callback(isGranted);
  }

  return isGranted;
}

export async function requestBlePermissions(
  callback?: PermissionCallback,
): Promise<void> {
  // const isBluetoothPermissionAllowed = await getValue(
  //   StorageKey.BLUETOOTH_PERMISSION_ALLOWED,
  // );

  // if (isBluetoothPermissionAllowed && callback) {
  //   callback(true);
  //   return;
  // }

  if (Platform.OS === 'ios') {
    // await requestMultiple([
    //   PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
    //   PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    // ]).then((statuses) => {
    //   return handlePermissionResponse(statuses, callback);
    // });
  } else {
    await requestMultiple([
      PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
      PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]).then((statuses) => {
      return handlePermissionResponse(statuses, callback);
    });
  }
}
