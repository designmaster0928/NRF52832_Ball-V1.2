import { dbConfig } from 'config/db.config';

import { MMKV } from '../db/mmkv-storage.db';
import { ValueOf } from '../types/generic.type';

export async function saveUserIdAsync(userId: string): Promise<void> {
  await MMKV.setStringAsync(dbConfig.storageKeys.userId, userId);
}

export function getUserId(): string | null | undefined {
  return MMKV.getString(dbConfig.storageKeys.userId);
}

export function generateUserSpecificStorageKey({
  isIndex = false,
  key,
  sessionId,
  throwId,
  userId,
}: {
  isIndex?: boolean;
  key: ValueOf<typeof dbConfig.storageKeys>;
  sessionId?: string;
  throwId?: string;
  userId: string;
}): string {
  const composedKey = `${isIndex ? 'index-' : ''}${key}.${userId}${
    sessionId ? '.' + sessionId : ''
  }${throwId ? '.' + throwId : ''}`;

  console.log('generateUserSpecificStorageKey: ' + composedKey);
  return composedKey;
}
