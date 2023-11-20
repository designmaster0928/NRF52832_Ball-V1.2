import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { generateUserSpecificStorageKey } from 'helpers/user.helper';
import { UserStatSession } from 'models/user-stats.model';

import { useUserId } from './useUserId.hook';

export function useStoredBallSession(
  sessionId: string,
): UserStatSession | Record<string, never> {
  const userId = useUserId();

  const storageKey = generateUserSpecificStorageKey({
    key: dbConfig.storageKeys.userStatSession,
    sessionId: sessionId,
    userId: userId || '',
  });

  const [session] = useMMKVStorage(storageKey, MMKV);

  return session || {};
}
