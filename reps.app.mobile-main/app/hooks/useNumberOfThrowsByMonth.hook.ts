import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useNumberOfThrowsByMonth(): Record<string, number> {
  const [monthlyThrows] = useMMKVStorage<Record<string, number>>(
    dbConfig.storageKeys.userStatSessionMonthlyThrows,
    MMKV,
    {},
  );

  return monthlyThrows;
}
