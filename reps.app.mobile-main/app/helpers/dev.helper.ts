/*
 * Mocks are based off most recent BLE Chars Map
 * https://docs.google.com/spreadsheets/d/17UsuLpIZLS9Vo5P3dLnXwaxEALRWJ_2kWRaBuKpM-cA/edit#gid=0
 */

import { interval, map, takeWhile, tap } from 'rxjs';

import { mockLastThrowStats } from 'config/mock.config';
import { characteristicValuesSubject$ } from 'streams/bluetooth.stream';

import { randomFromArray } from './random.helper';

const shouldMockBallStream: boolean = false;

const mockThrowInterval = interval(5000);

export const mockThrow$ = mockThrowInterval.pipe(
  takeWhile(() => shouldMockBallStream),
  map(() => randomFromArray(mockLastThrowStats)),
  tap((value: Array<number>) => {
    characteristicValuesSubject$.next({
      characteristicUUID: '1BC51012-0200-B8BE-E611-E60C60B7C467',
      peripheralUUID: 'A647CC62-97CD-D82E-E54B-57A3BC01FD41',
      value,
    });
  }),
);
