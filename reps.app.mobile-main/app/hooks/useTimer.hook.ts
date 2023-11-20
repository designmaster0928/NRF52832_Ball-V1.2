import { useEffect, useMemo, useState } from 'react';

import { createTimer } from 'streams/timer.stream';

type ReturnParams = [
  timer: number,
  getCurrentTime: () => number,
  startTimer: () => void,
  pauseTimer: () => void,
];

export function useTimer(): ReturnParams {
  const [timer, setTimer] = useState(0);

  const timerSource = useMemo(() => {
    return createTimer();
  }, []);

  useEffect(() => {
    const timerSubscription = timerSource.timer$.subscribe((val) => {
      setTimer(val);
    });

    return () => {
      timerSource.timerControlSubject$.next('stop');
      timerSubscription.unsubscribe();
    };
  }, []);

  function startTimer(): void {
    timerSource.timerControlSubject$.next('start');
  }

  function pauseTimer(): void {
    timerSource.timerControlSubject$.next('pause');
  }

  return [timer, timerSource.getCurrentTime, startTimer, pauseTimer];
}
