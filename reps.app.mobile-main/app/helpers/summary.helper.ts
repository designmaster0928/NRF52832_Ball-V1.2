import {
  addDays,
  eachDayOfInterval,
  format,
  isAfter,
  isToday,
  startOfWeek,
  subDays,
} from 'date-fns';

import { WorkoutSummaryDayValues } from 'models/training.model';

export function generateDates(num: number): Array<string> {
  return Array.from({ length: num }, () => {
    // Subtract a random number of days (up to 40) from the current date, starting 4 days ago
    const date = subDays(new Date(), 0 + Math.floor(Math.random() * 40));
    return format(date, 'yyyy-MM-dd');
  });
}

export function fillGrid(
  suspectDates: Array<string>,
): Array<Array<WorkoutSummaryDayValues>> {
  const suspectDatesSet = new Set(suspectDates);

  const end = subDays(startOfWeek(addDays(new Date(), 7)), 0);
  const start = subDays(end, 27);
  const dates = eachDayOfInterval({
    end,
    start,
  });

  const outputDateArray = Array.from({ length: 28 }, (value, index) => {
    const baseObject = {
      isToday: isToday(dates[index]),
    };

    if (isAfter(dates[index], new Date())) {
      return {
        ...baseObject,
        status: 'Empty',
      };
    }

    return suspectDatesSet.has(format(dates[index], 'yyyy-MM-dd'))
      ? {
          ...baseObject,
          status: 'Complete',
        }
      : {
          ...baseObject,
          status: 'Skipped',
        };
  });

  const weeks = Array.from({ length: 4 }, () => Array(7).fill(null));
  for (let i = 0; i < outputDateArray.length; i++) {
    weeks[Math.floor(i / 7)][i % 7] = outputDateArray[i];
  }

  return weeks;
}
