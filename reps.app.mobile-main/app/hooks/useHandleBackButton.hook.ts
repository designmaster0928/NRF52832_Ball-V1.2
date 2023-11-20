import { useCallback, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { handleAlertConfirm } from 'helpers/alert.helper';

export function useHandleBackButton(
  shouldDeferInitialization?: boolean,
): [() => void, () => void] {
  const navigation = useNavigation();
  const isInitialized = useRef(false);

  const manualUnsubscribe = useRef(() => {
    // NOOP
  });

  const enableBackButtonHandler = useCallback(() => {
    if (isInitialized.current) {
      return;
    }

    manualUnsubscribe.current = navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();

      handleAlertConfirm({
        e,
        navigation,
      });
    });

    isInitialized.current = true;
  }, []);

  useEffect(() => {
    if (!shouldDeferInitialization) {
      enableBackButtonHandler();
    }

    // Cleanup the listener when the component is unmounted
    return manualUnsubscribe.current;
  }, [navigation]);

  return [manualUnsubscribe.current, enableBackButtonHandler];
}
