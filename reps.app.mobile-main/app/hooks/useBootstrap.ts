import { useEffect } from 'react';

import { bootstrap, teardown } from 'helpers/bootstrap.helper';

export function useBootstrap(): void {
  useEffect(() => {
    bootstrap();
    return () => {
      teardown();
    };
  }, []);
}
