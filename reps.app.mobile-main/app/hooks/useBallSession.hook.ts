import { useEffect, useState } from 'react';

import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import {
  recordDailySession,
  storeUserStatSessionThrow,
} from 'helpers/session.helper';
import { getUserId } from 'helpers/user.helper';
import { buildUserStatSessionId } from 'helpers/user-stats.helper';
import { BallSessionStats } from 'models/session.model';
import { StatHand } from 'models/user-stats.model';
import { session$, sessionSubject$ } from 'streams/session.stream';

const defaultData: BallSessionStats = {
  averageSpeed: 0,
  hand: 'mixed',
  lastThrowSpeed: 0,
  repTypes: WorkoutFreestyleTypes.Unknown,
  sessionId: '',
  sessionSpeeds: [0],
  throws: 0,
};

export function useBallSession(
  hand?: StatHand,
  throwType?: WorkoutFreestyleTypes,
  getCurrentTime?: () => number,
): BallSessionStats {
  const [session, setSession] = useState<Partial<BallSessionStats>>({
    ...defaultData,
    hand: hand,
    repTypes: throwType || WorkoutFreestyleTypes.Unknown,
  });

  useEffect(() => {
    let userStatSessionId: string;

    const userId = getUserId();

    if (userId) {
      userStatSessionId = buildUserStatSessionId(userId);
      sessionSubject$.next(userStatSessionId);

      setSession({
        ...session,
        sessionId: userStatSessionId,
      });
    }

    const subscription = session$.subscribe((sessionData) => {
      if (getCurrentTime) {
        storeUserStatSessionThrow({
          elapsedTime: getCurrentTime(),
          hand: hand || 'mixed',
          sessionId: userStatSessionId,
          speed: sessionData.lastThrowSpeed || 0,
          throwType: throwType || 'unknown',
        });
      }

      setSession({
        ...sessionData,
        sessionId: userStatSessionId,
      });
    });

    return (): void => {
      sessionSubject$.next(null);
      subscription.unsubscribe();

      setSession({
        ...defaultData,
        hand: hand,
        repTypes: throwType || WorkoutFreestyleTypes.Unknown,
      });
    };
  }, []);

  useEffect(() => {
    if (session.throws === 10) {
      recordDailySession();
    }
  }, [session.throws]);

  return {
    averageSpeed: 0,
    hand: hand,
    lastThrowSpeed: 0,
    repTypes: throwType || WorkoutFreestyleTypes.Unknown,
    sessionId: '',
    sessionSpeeds: [0],
    throws: 0,
    ...session,
  };
}
