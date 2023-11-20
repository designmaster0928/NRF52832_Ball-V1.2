import { useEffect, useState } from 'react';

import { BallStats } from 'models/ball.model';
import { ballLastStats$ } from 'streams/ball.stream';

export function useBallStats(): BallStats {
  const [ballStats, setBallStats] = useState({});
  useEffect(() => {
    const subscription = ballLastStats$.subscribe(setBallStats);
    return () => subscription.unsubscribe();
  }, []);

  return ballStats;
}
