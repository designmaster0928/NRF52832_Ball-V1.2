import { useMemo } from 'react';
import { differenceInDays, parseISO } from 'date-fns';

import { useDailySessions } from './useDailySessions.hook';

export function useAverageWeeklySessions(): number {
  const dailySessions = useDailySessions();

  const result = useMemo(() => {
    if (!dailySessions || dailySessions.length === 0) {
      return 0;
    }

    // Parse dates from ISO strings
    const parsedDates: Array<number> = dailySessions
      .map((date) => {
        if (date) {
          return Number(parseISO(date).getTime());
        } else {
          return null;
        }
      })
      .filter((date): date is number => date !== null);

    // Find earliest and latest date
    const earliestDate = new Date(Math.min(...parsedDates));
    const latestDate = new Date(Math.max(...parsedDates));

    const totalDays = differenceInDays(latestDate, earliestDate) + 1; // +1 to include both start and end dates

    // Calculate weeks
    let weeks;
    if (totalDays <= 7) {
      weeks = 1;
    } else {
      weeks = Math.ceil(totalDays / 7); // Round up to ensure we're not underestimating the number of weeks
    }

    // Calculate average entries per week
    return Number(dailySessions.length / weeks);
  }, [dailySessions]);

  return Math.floor(result);
}
