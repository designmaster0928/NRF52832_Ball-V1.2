import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useFastestThrow(): number {
  const [fastestThrow] = useMMKVStorage<number>(
    dbConfig.storageKeys.userStatFastestThrow,
    MMKV,
    0,
  );

  return fastestThrow;
}
