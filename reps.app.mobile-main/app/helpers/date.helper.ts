import { differenceInDays, parseISO } from 'date-fns';

export function isDateWithinLastNumDays(
  dateString: string,
  numDays: number,
): boolean {
  const currentDate = new Date();
  const givenDate = parseISO(dateString);
  const daysDifference = differenceInDays(currentDate, givenDate);

  return daysDifference <= numDays && daysDifference >= 0;
}

export function filterDatesWithinLastNumDays(
  dateArray: Array<string>,
  numDays: number,
): Array<string> {
  const filteredDates = dateArray.filter((dateString) =>
    isDateWithinLastNumDays(dateString, numDays),
  );
  return filteredDates;
}

export function getCurrentStreak(dates: Array<string>): number {
  if (dates.length < 2) {
    return 0; // No streak if less than 2 dates
  }

  let streak = 1; // Start with the most recent date as the beginning of the streak

  // Iterate through the dates from the most recent, checking for a difference of 1 day
  for (let i = dates.length - 1; i > 0; i--) {
    const date1 = parseISO(dates[i]);
    const date2 = parseISO(dates[i - 1]);
    const diff = differenceInDays(date1, date2);

    // If the difference is 1, increment the streak count
    if (diff === 1) {
      streak++;
    } else {
      break; // The streak has ended, so exit the loop
    }
  }

  return streak; // Return the streak count
}

import { format, sub } from 'date-fns';

export function getLastNumMonths(numMonths: number): Array<string> {
  return Array.from({ length: numMonths })
    .map((_, i) => {
      return format(sub(new Date(), { months: i }), 'MMM');
    })
    .reverse();
}
