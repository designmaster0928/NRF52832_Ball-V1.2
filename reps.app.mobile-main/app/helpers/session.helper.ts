import { formatISO } from 'date-fns';
import { v5 as uuidv5 } from 'uuid';

import { dbConfig } from 'config/db.config';
import { generateUserSpecificStorageKey, getUserId } from 'helpers/user.helper';
import {
  UserStatSession,
  UserStatSessionThrowParams,
} from 'models/user-stats.model';
import { UserStats } from 'models/user-stats.model';

import { MMKV } from '../db/mmkv-storage.db';

import { filterDatesWithinLastNumDays } from './date.helper';

export async function storeUserStatSessionThrow(
  params: UserStatSessionThrowParams,
): Promise<void> {
  const userId = getUserId();
  if (!userId) {
    console.error('No userId found');
    return;
  }

  const timestamp = new Date().getTime();
  const throwId = uuidv5(`Throw-${timestamp}`, userId);

  const storageKey = generateUserSpecificStorageKey({
    isIndex: false,
    key: dbConfig.storageKeys.userStatSessionThrow,
    sessionId: params.sessionId,
    throwId: throwId,
    userId: userId,
  });

  MMKV.setMapAsync(storageKey, {
    achievementId: params.sessionId,
    dateTime: new Date().toISOString(),
    elapsedTime: params.elapsedTime || 0,
    globalSecondaryIndex: `Throw#${params.throwType}#${params.hand}#${timestamp}`,
    hand: params.hand || 'mixed',
    primarySortKey: `Throw#${throwId}#${timestamp}`,
    repTypes: params.throwType || 'mixed',
    speed: Number(params.speed?.toFixed(4)) || 0,
    statId: throwId,
    timestamp: timestamp,
    userId: userId,
  });
}

export function getUserStatSessionThrow(
  throwId: string,
  throws: Array<UserStats | null | undefined>,
): UserStats | null {
  return throws.find((throwObj) => throwObj?.statId === throwId) || null;
}

export function handleRemoveUserStatSessionThrow(
  remove: (key: string) => void,
  throwId: string,
  throws: Array<UserStats | null | undefined>,
): void {
  const throwToRemove = getUserStatSessionThrow(throwId, throws);

  if (!throwToRemove) {
    console.log(
      `handleRemoveUserStatSessionThrow: No session found with that id - ${throwId}`,
    );
    return;
  }

  const storageKeyToRemove = generateUserSpecificStorageKey({
    isIndex: false,
    key: dbConfig.storageKeys.userStatSessionThrow,
    sessionId: throwToRemove?.achievementId,
    throwId: throwToRemove?.statId,
    userId: throwToRemove?.userId || 'storageKeyToRemove-no-user-id',
  });

  remove(storageKeyToRemove);
}

export function handleRemoveUserStatSession(
  handleRemove: (key: string) => void,
  sessionId: string,
  userId: string,
): void {
  if (!sessionId) {
    console.log(
      `handleRemoveUserStatSessionThrow: No session found with that id - ${sessionId}`,
    );
    return;
  }

  const storageKeyToRemove = generateUserSpecificStorageKey({
    isIndex: false,
    key: dbConfig.storageKeys.userStatSession,
    sessionId: sessionId,
    userId: userId || 'storageKeyToRemove-no-user-id',
  });

  try {
    handleRemove(storageKeyToRemove);
    console.log(
      'handleRemoveUserStatSession: Removed session',
      storageKeyToRemove,
    );
  } catch (err) {
    console.log(err);
  }
}

export function recordDailySession(): boolean | null | undefined {
  const maxNumberOfDays = 4 * 7; // 4 Weeks

  let dailySessionsArray =
    MMKV.getArray<string>(dbConfig.storageKeys.userStatSessionDaily) || [];

  // Step 1: Check if the array exists
  if (!Array.isArray(dailySessionsArray)) {
    // Step 2: If the array does not exist, create one
    dailySessionsArray = [];
  }

  // Step 3: Check if today's date (in the format "DD MMM YYYY") exists in the array
  const todayDateString = formatISO(new Date(), { representation: 'date' });
  const hasDate = dailySessionsArray.includes(todayDateString);

  if (!hasDate) {
    // Step 4: If today's date does not exist in the array, add it
    dailySessionsArray.push(todayDateString);
  }

  if (dailySessionsArray.length > maxNumberOfDays) {
    dailySessionsArray = filterDatesWithinLastNumDays(
      dailySessionsArray,
      maxNumberOfDays,
    );
  }

  return MMKV.setArray(
    dbConfig.storageKeys.userStatSessionDaily,
    dailySessionsArray,
  );
}

export function storeUserStatSessionIndex(
  key: string,
  session: UserStatSession,
): boolean | null | undefined {
  if (session && session.reps === 0) {
    return;
  }

  // Store throw index
  const storageKey = generateUserSpecificStorageKey({
    isIndex: true,
    key: dbConfig.storageKeys.userStatSession,
    userId: session.userId,
  });

  const indexForThrow = MMKV.getArray(storageKey) || [];

  if (indexForThrow.indexOf(key) === -1) {
    return MMKV.setArray(storageKey, [...indexForThrow, key]);
  }

  return false;
}

export function storeUserStatSession(
  value: Partial<UserStats>,
): boolean | null | undefined {
  if (value && value.reps === 0) {
    return;
  }

  const storageKey = generateUserSpecificStorageKey({
    key: dbConfig.storageKeys.userStatSession,
    sessionId: value.achievementId,
    userId: value.userId || '',
  });

  let session: UserStatSession = MMKV.getMap(storageKey) || {
    achievementId: value.achievementId || '',
    averageSpeed: value.averageSpeed || 0,
    dateTime: new Date().toISOString(),
    globalSecondaryIndex: '',
    hand: value.hand || 'mixed',
    primarySortKey: '',
    repTypes: value.repTypes || '',
    reps: value.reps || 0,
    sessionTime: value.sessionTime || 0,
    statId: value.statId || '',
    statType: 'session',
    timestamp: value.timestamp || Date.now(),
    topSpeed: value.speed || 0,
    userId: value.userId || '',
  };

  session = {
    ...session,
    averageSpeed: value.averageSpeed || 0,
    dateTime: session.dateTime || new Date().toISOString(),
    hand: value.hand || session.hand || 'mixed',
    reps: value.reps || session.reps || 0,
    sessionTime: value.sessionTime || session.sessionTime,
    timestamp: session.timestamp || value.timestamp || 0,
    topSpeed:
      value.speed && value.speed > session.topSpeed
        ? value.speed
        : session.topSpeed,
  };

  MMKV.setMap(storageKey, session);

  return storeUserStatSessionIndex(storageKey, session);
}
