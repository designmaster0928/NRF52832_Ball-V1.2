import { Subject, tap } from 'rxjs';

export const connectionRetrySubject$ = new Subject();

export const connectionRetry$ = connectionRetrySubject$.pipe(
  tap(() => {
    // console.log('connectionRetry$');
  }),
);
