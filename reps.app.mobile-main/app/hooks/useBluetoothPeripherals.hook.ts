import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { BluetoothPeripheralStatePayload } from 'models/bluetooth.model';

export function useBluetoothPeripherals(): Record<
  string,
  BluetoothPeripheralStatePayload
> {
  const [peripherals] = useMMKVStorage(
    dbConfig.storageKeys.bluetoothPeripherals,
    MMKV,
    {},
  );

  return peripherals;
}
