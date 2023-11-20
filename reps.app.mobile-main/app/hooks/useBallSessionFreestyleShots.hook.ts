import { useIndex, useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { generateUserSpecificStorageKey } from 'helpers/user.helper';
import { UserStats } from 'models/user-stats.model';

import { useUserId } from './useUserId.hook';

export function useBallSessionFreestyleShots(
  sessionId: string,
): [
  values: Array<UserStats | null | undefined>,
  update: (key: string, value: UserStats) => void,
  remove: (key: string) => void,
] {
  const userId = useUserId();

  const storageKey = generateUserSpecificStorageKey({
    isIndex: true,
    key: dbConfig.storageKeys.userStatSessionThrow,
    sessionId: sessionId,
    userId: userId || 'no-user-id',
  });

  const [sessionShotsIndex] = useMMKVStorage(storageKey, MMKV, []);
  const index = useIndex<UserStats>(sessionShotsIndex, 'object', MMKV);

  return index;
}
