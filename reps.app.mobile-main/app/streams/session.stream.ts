import {
  BehaviorSubject,
  filter,
  map,
  scan,
  share,
  shareReplay,
  withLatestFrom,
} from 'rxjs';

import { calculateAverageFromArray } from 'helpers/math/average.helper';
import { ShotPayload } from 'models/ball.model';
import { BallSessionStats, SessionAccumulator } from 'models/session.model';

import { ballLastStats$ } from './ball.stream';

const defaultPayloadData = {
  averageSpeed: 0,
  deviceThrows: {},
  duration: 0,
  lastThrowSpeed: 0,
  maxAcceleration: 0,
  referenceThrows: 0,
  sessionId: '',
  sessionSpeeds: [],
  throws: 0,
  timeOfFlight: 0,
};

export const sessionSubject$ = new BehaviorSubject<string | null>(null);

export const session$ = ballLastStats$.pipe(
  withLatestFrom(sessionSubject$),

  filter(([, sessionId]) => !!sessionId),
  map(([shotPayload, sessionId]): ShotPayload => {
    return { ...shotPayload, sessionId: sessionId || '' };
  }),
  scan((acc: SessionAccumulator, curr: ShotPayload): SessionAccumulator => {
    if (acc.sessionId !== curr.sessionId) {
      acc = defaultPayloadData;
    }

    const shotData = curr.shotData;

    const sessionSpeeds = [...acc.sessionSpeeds, shotData.speedMph || 0];
    const averageSpeed = calculateAverageFromArray(sessionSpeeds || [0]);

    let throws = acc.throws + 1;
    if (acc.deviceThrows[curr.id]) {
      const throwsDiff = shotData.shots - acc.deviceThrows[curr.id];

      throws = acc.throws + throwsDiff;
    }

    const deviceThrows = {
      [curr.id]: shotData.shots,
    };

    return {
      averageSpeed: averageSpeed,
      deviceThrows: deviceThrows,
      duration: shotData.duration,
      lastThrowSpeed: shotData.speedMph || 0,
      maxAcceleration: shotData.maxAcceleration,
      sessionId: curr.sessionId,
      sessionSpeeds: sessionSpeeds,
      throws: throws,
      timeOfFlight: shotData.timeOfFlight,
    };
  }, defaultPayloadData),
  map((payload: SessionAccumulator): Partial<BallSessionStats> => {
    return {
      averageSpeed: payload.averageSpeed,
      lastThrowSpeed: payload.lastThrowSpeed,
      sessionSpeeds: payload.sessionSpeeds,
      throws: payload.throws,
    };
  }),
  share(),
);
