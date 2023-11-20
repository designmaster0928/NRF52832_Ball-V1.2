import { MMKVInstance } from 'react-native-mmkv-storage';
import { format } from 'date-fns';

import { dbConfig } from 'config/db.config';
import { UserStats } from 'models/user-stats.model';

import { generateUserSpecificStorageKey } from './user.helper';

export function incrementThrowsInCurrentMonth(
  MMKV: MMKVInstance,
): boolean | null | undefined {
  const key = format(
    new Date(),
    dbConfig.dataDelineationKeyFormat.userStatSessionMonthlyThrowsMonthFormat,
  );

  let monthlyThrows =
    MMKV.getMap<Record<string, number>>(
      dbConfig.storageKeys.userStatSessionMonthlyThrows,
    ) || {};

  if (monthlyThrows[key]) {
    monthlyThrows = {
      ...monthlyThrows,
      [key]: monthlyThrows[key] + 1,
    };
  } else {
    monthlyThrows = {
      ...monthlyThrows,
      [key]: 1,
    };
  }

  console.log('incrementThrowsInCurrentMonth::monthlyThrows', monthlyThrows);

  return MMKV.setMap(
    dbConfig.storageKeys.userStatSessionMonthlyThrows,
    monthlyThrows,
  );
}

export function incrementRepsInCurrentMonth(
  MMKV: MMKVInstance,
): boolean | null | undefined {
  const key = format(
    new Date(),
    dbConfig.dataDelineationKeyFormat.userStatSessionMonthlyThrowsMonthFormat,
  );

  let monthlyReps =
    MMKV.getMap<Record<string, number>>(
      dbConfig.storageKeys.userStatSessionMonthlyReps,
    ) || {};

  if (monthlyReps[key]) {
    monthlyReps = {
      ...monthlyReps,
      [key]: monthlyReps[key] + 1,
    };
  } else {
    monthlyReps = {
      ...monthlyReps,
      [key]: 1,
    };
  }

  console.log('incrementRepsInCurrentMonth::monthlyReps', monthlyReps);

  return MMKV.setMap(
    dbConfig.storageKeys.userStatSessionMonthlyReps,
    monthlyReps,
  );
}

export function storeUserStatSessionThrowIndex(
  MMKV: MMKVInstance,
  key: string,
  value: UserStats,
): boolean | null | undefined {
  // Store throw index
  const storageKey = generateUserSpecificStorageKey({
    isIndex: true,
    key: dbConfig.storageKeys.userStatSessionThrow,
    sessionId: value.achievementId,
    userId: value.userId,
  });

  const indexForThrow = MMKV.getArray(storageKey) || [];

  return MMKV.setArray(storageKey, [...indexForThrow, key]);
}

export function storeUserStatAllTimeThrows(
  MMKV: MMKVInstance,
): boolean | null | undefined {
  const allTimeThrows =
    MMKV.getInt(dbConfig.storageKeys.userStatAllTimeThrows) || 0;

  return MMKV.setInt(
    dbConfig.storageKeys.userStatAllTimeThrows,
    allTimeThrows + 1,
  );
}

export function storeUserStatAllTimeReps(
  MMKV: MMKVInstance,
): boolean | null | undefined {
  const allTimeReps =
    MMKV.getInt(dbConfig.storageKeys.userStatAllTimeReps) || 0;

  console.log('storeUserStatAllTimeReps::allTimeReps', allTimeReps);

  return MMKV.setInt(dbConfig.storageKeys.userStatAllTimeReps, allTimeReps + 1);
}

export function storeUserStatFastestThrow(
  MMKV: MMKVInstance,
  speed: number,
): boolean | null | undefined {
  const fastestThrow =
    MMKV.getInt(dbConfig.storageKeys.userStatFastestThrow) || 0;

  if (speed > fastestThrow) {
    return MMKV.setInt(dbConfig.storageKeys.userStatFastestThrow, speed);
  }

  return false;
}
