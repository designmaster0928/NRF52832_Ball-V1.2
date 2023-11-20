import { useCallback, useEffect } from 'react';

import { storeUserStatSession } from 'helpers/session.helper';
import { BallSessionStats } from 'models/session.model';

import { useUserId } from './useUserId.hook';

interface Params {
  session: BallSessionStats;
  getCurrentTime: () => number;
}

export function useStoreBallSession({ session, getCurrentTime }: Params): void {
  const userId = useUserId();

  const storeSession = useCallback(() => {
    if (session.sessionId) {
      storeUserStatSession({
        achievementId: session.sessionId,
        averageSpeed: session.averageSpeed,
        hand: session.hand,
        repTypes: session.repTypes,
        reps: session.throws,
        sessionTime: getCurrentTime(),
        speed: session.lastThrowSpeed,
        statId: session.throwId,
        userId: userId || '',
      });
    }
  }, [session.repTypes, session.sessionId, session.throws]);

  useEffect(() => {
    storeSession();
    return () => {
      storeSession();
    };
  }, [session.sessionId, session.throws]);
}
