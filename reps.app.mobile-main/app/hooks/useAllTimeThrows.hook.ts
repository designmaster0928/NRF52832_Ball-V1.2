import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useAllTimeThrows(): number {
  const [allTimeThrows] = useMMKVStorage<number>(
    dbConfig.storageKeys.userStatAllTimeThrows,
    MMKV,
    0,
  );

  return allTimeThrows;
}
