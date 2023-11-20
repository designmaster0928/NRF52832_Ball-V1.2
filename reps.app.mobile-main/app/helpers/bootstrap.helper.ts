import {
  AppState,
  AppStateStatus,
  NativeEventSubscription,
} from 'react-native';

import { bootstrapBle, tearDownBle } from './bluetooth.helper';
import {
  rxjsSubscribeAll,
  rxjsUnsubscribeAll,
} from './rxjs-subscription.helper';

let appStateSubscription: NativeEventSubscription;
let prevAppState: AppStateStatus = 'unknown';

function handleAppBackground(): void {
  // console.log('App has gone to the background!');
  // tearDownBle();
  rxjsUnsubscribeAll();
}

function handleAppForeground(): void {
  // console.log('App has come to the foreground!');

  // bootstrapBle();
  rxjsSubscribeAll();
}

function handleAppStateChange(nextAppState: AppStateStatus): void {
  if (prevAppState.match(/inactive|background/) && nextAppState === 'active') {
    handleAppForeground();
  } else {
    handleAppBackground();
  }

  prevAppState = nextAppState;
}

export async function bootstrap(): Promise<void> {
  appStateSubscription = AppState.addEventListener(
    'change',
    handleAppStateChange,
  );

  bootstrapBle();
  rxjsSubscribeAll();
}

export function teardown(): void {
  if (appStateSubscription) {
    appStateSubscription.remove();
  }

  tearDownBle();
  rxjsUnsubscribeAll();
}
