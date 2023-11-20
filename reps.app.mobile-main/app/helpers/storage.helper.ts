import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageKey } from 'enums/storage.enum';

export async function storeValue(
  storageKey: StorageKey,
  value: unknown,
): Promise<any> {
  try {
    return await AsyncStorage.setItem(storageKey, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

export async function getValue(storageKey: StorageKey): Promise<any> {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (e) {
    console.error(e);
  }
}
