import { useMemo } from 'react';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import { format } from 'date-fns';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useNumberOfThrowsThisMonth(): number {
  const monthOfTheYear = useMemo(
    () =>
      format(
        new Date(),
        dbConfig.dataDelineationKeyFormat
          .userStatSessionMonthlyThrowsMonthFormat,
      ),
    [],
  );

  const [monthlyThrows] = useMMKVStorage<Record<string, number>>(
    dbConfig.storageKeys.userStatSessionMonthlyThrows,
    MMKV,
    {},
  );

  return monthlyThrows[monthOfTheYear] || 0;
}
