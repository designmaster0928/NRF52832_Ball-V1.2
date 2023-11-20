import { useEffect } from 'react';

import { mockThrow$ } from 'helpers/dev.helper';

interface Props {
  shouldMockBallStream?: boolean;
}

export function useDev({ shouldMockBallStream }: Props): void {
  useEffect(() => {
    const mockThrowSubscription =
      shouldMockBallStream && mockThrow$.subscribe();

    return () => {
      if (mockThrowSubscription) {
        mockThrowSubscription.unsubscribe();
      }
    };
  }, [shouldMockBallStream]);
}
