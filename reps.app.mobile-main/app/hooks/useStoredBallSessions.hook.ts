import { useIndex, useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { generateUserSpecificStorageKey } from 'helpers/user.helper';
import { UserStatSession } from 'models/user-stats.model';

import { useUserId } from './useUserId.hook';

export function useStoredBallSessions(): Array<
  UserStatSession | null | undefined
> {
  const [sessions] = useStoredBallSessionsManipulate();
  return sessions || {};
}

export function useStoredBallSessionsManipulate(): [
  values: Array<UserStatSession | null | undefined>,
  update: (key: string, value: UserStatSession) => void,
  remove: (key: string) => void,
] {
  const userId = useUserId();

  const storageKey = generateUserSpecificStorageKey({
    isIndex: true,
    key: dbConfig.storageKeys.userStatSession,
    userId: userId || '',
  });

  const [sessionsIndex] = useMMKVStorage(storageKey, MMKV, []);
  const [sessions, updateSession, removeSession] = useIndex<UserStatSession>(
    sessionsIndex,
    'object',
    MMKV,
  );

  return [sessions || {}, updateSession, removeSession];
}
