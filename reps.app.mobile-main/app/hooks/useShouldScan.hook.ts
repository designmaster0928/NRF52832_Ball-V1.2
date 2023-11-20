import { useEffect } from 'react';

import { startScan, stopScan } from 'helpers/bluetooth.helper';
import { StackNavigationProp } from 'models/navigation.model';

export function useShouldScan(navigation: StackNavigationProp): void {
  useEffect(() => {
    if (navigation.isFocused()) {
      startScan(true);
    } else {
      stopScan();
    }

    const unsubscribeFocus = navigation.addListener('focus', () => {
      startScan(true);
    });

    const unsubscribeBlur = navigation.addListener('beforeRemove', () => {
      stopScan();
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);
}
