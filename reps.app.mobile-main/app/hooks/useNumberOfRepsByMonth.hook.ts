import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useNumberOfRepsByMonth(): Record<string, number> {
  const [monthlyReps] = useMMKVStorage<Record<string, number>>(
    dbConfig.storageKeys.userStatSessionMonthlyReps,
    MMKV,
    {},
  );

  return monthlyReps;
}
