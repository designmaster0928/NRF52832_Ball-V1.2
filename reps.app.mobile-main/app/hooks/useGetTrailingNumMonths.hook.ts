import { useMemo } from 'react';

import { getLastNumMonths } from 'helpers/date.helper';

export function useGetLastNumMonths(numMonths: number): Array<string> {
  return useMemo(() => {
    return getLastNumMonths(numMonths);
  }, [numMonths]);
}
