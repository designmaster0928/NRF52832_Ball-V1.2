import { useMemo } from 'react';

import {
  filterDatesWithinLastNumDays,
  getCurrentStreak,
} from 'helpers/date.helper';

import { useDailySessions } from './useDailySessions.hook';

const numberOfDays = 4 * 7; // 4 Weeks

export function useCurrentSessionStreak(): number {
  const dailySessions = useDailySessions();

  return useMemo(() => {
    const datesInTheLastFourWeeks = filterDatesWithinLastNumDays(
      dailySessions,
      numberOfDays,
    );

    return getCurrentStreak(datesInTheLastFourWeeks);
  }, []);
}
