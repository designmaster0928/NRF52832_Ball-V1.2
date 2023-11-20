import { filter, merge, share, tap } from 'rxjs';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { ShotPayload } from 'models/ball.model';

import {
  advertisementValues$,
  characteristicValues$,
} from './bluetooth.stream';

export const ballLastStats$ = merge(
  advertisementValues$,
  characteristicValues$,
).pipe(
  filter((data: ShotPayload) => {
    const shots = data?.shotData.shots;

    if (typeof shots !== 'number') {
      return false;
    }

    let lastShotValues =
      MMKV.getMap<Record<string, number>>(
        dbConfig.storageKeys.bluetoothPeripheralsSessionReps,
      ) || {};

    if (!lastShotValues[data.id] || lastShotValues[data.id] < shots) {
      lastShotValues = {
        ...lastShotValues,
        [data.id]: data.shotData.shots,
      };

      MMKV.setMap(
        dbConfig.storageKeys.bluetoothPeripheralsSessionReps,
        lastShotValues,
      );

      return true;
    }

    return false;
  }),
  tap((value: ShotPayload) => {
    console.log('ballLastStats$', value);
  }),
  share(),
);
