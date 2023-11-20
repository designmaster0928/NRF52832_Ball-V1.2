import {
  BehaviorSubject,
  EMPTY,
  filter,
  interval,
  Observable,
  scan,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

import { TimerControl } from 'models/timer.model';

const interval$ = interval(1000);

interface TimerSource {
  getCurrentTime: () => number;
  timer$: Observable<number>;
  timerControlSubject$: BehaviorSubject<TimerControl>;
}

export function createTimer(): TimerSource {
  const timerControlSubject$ = new BehaviorSubject<TimerControl>('pause');

  let currentTime = 0;

  const timer$ = timerControlSubject$.pipe(
    takeUntil(timerControlSubject$.pipe(filter((val) => val === 'stop'))),
    switchMap((val) => (val === 'start' ? interval$ : EMPTY)),
    scan((acc) => {
      return acc + 1;
    }, 0),
    tap((val) => {
      currentTime = val;
    }),
    shareReplay(1),
    // tap((val) => // console.log('timer$', val)),
  );

  return {
    getCurrentTime: () => currentTime,
    timer$,
    timerControlSubject$,
  };
}
