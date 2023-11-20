import { dbConfig } from 'config/db.config';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import {
  incrementRepsInCurrentMonth,
  incrementThrowsInCurrentMonth,
  storeUserStatAllTimeReps,
  storeUserStatAllTimeThrows,
  storeUserStatFastestThrow,
  storeUserStatSessionThrowIndex,
} from 'helpers/throws.helper';
import { UserStats } from 'models/user-stats.model';

import { initWithMMKV } from './mmkv-storage.db';

initWithMMKV((MMKV) => {
  MMKV.transactions.register('object', 'beforewrite', (key, value) => {
    if (key.startsWith(dbConfig.storageKeys.userStatSessionThrow)) {
      const itemValue = value as UserStats;

      // Store the session throw index.
      storeUserStatSessionThrowIndex(MMKV, key, itemValue);

      if (itemValue.repTypes === WorkoutFreestyleTypes.WallBall) {
        storeUserStatAllTimeReps(MMKV);

        incrementRepsInCurrentMonth(MMKV);
      }

      if (itemValue.repTypes === WorkoutFreestyleTypes.Shooting) {
        storeUserStatAllTimeThrows(MMKV);

        // Store number of throws per month
        incrementThrowsInCurrentMonth(MMKV);
      }

      if (itemValue.speed) {
        storeUserStatFastestThrow(MMKV, itemValue.speed);
      }
    }
  });
});
