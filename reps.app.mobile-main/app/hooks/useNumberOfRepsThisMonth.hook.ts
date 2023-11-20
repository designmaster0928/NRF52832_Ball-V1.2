import { useMemo } from 'react';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import { format } from 'date-fns';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useNumberOfRepsThisMonth(): number {
  const monthOfTheYear = useMemo(
    () =>
      format(
        new Date(),
        dbConfig.dataDelineationKeyFormat
          .userStatSessionMonthlyThrowsMonthFormat,
      ),
    [],
  );

  const [monthlyReps] = useMMKVStorage<Record<string, number>>(
    dbConfig.storageKeys.userStatSessionMonthlyReps,
    MMKV,
    {},
  );

  return monthlyReps[monthOfTheYear] || 0;
}
