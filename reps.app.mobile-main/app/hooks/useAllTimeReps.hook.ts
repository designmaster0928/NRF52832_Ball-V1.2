import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useAllTimeReps(): number {
  const [allTimeReps] = useMMKVStorage<number>(
    dbConfig.storageKeys.userStatAllTimeReps,
    MMKV,
    0,
  );

  return allTimeReps;
}
