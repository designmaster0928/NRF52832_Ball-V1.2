import { useMMKVStorage } from 'react-native-mmkv-storage';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';

export function useDailySessions(): Array<string> {
  const [dailySessions] = useMMKVStorage<Array<string>>(
    dbConfig.storageKeys.userStatSessionDaily,
    MMKV,
    [],
  );

  return dailySessions;
}
