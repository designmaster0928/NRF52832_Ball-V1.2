import { format, isAfter, startOfWeek, sub } from 'date-fns';

import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { UserStatSession } from 'models/user-stats.model';

interface WeeklyAverage {
  y: number;
}

interface MonthlyThrows {
  [date: string]: number;
}

export interface MonthlyThrowsFormatted {
  y: number;
}

function groupByWeek(
  data: Array<UserStatSession | null | undefined>,
): Record<string, Array<UserStatSession>> {
  const grouped: Record<string, Array<UserStatSession>> = {};

  data.forEach((item) => {
    if (!item) {
      return;
    }

    const weekStart = format(
      startOfWeek(new Date(item.dateTime)),
      'yyyy-MM-dd',
    );
    if (!grouped[weekStart]) {
      grouped[weekStart] = [];
    }
    grouped[weekStart].push(item);
  });

  return grouped;
}

function calculateWeeklyAverage(weekData: Array<UserStatSession>): number {
  const result = weekData.reduce(
    (acc, item) => {
      if (!item.averageSpeed || item.averageSpeed === 0 || item.reps === 0) {
        return acc;
      }

      acc.totalSumOfSpeeds += item.averageSpeed * item.reps;
      acc.totalCountOfRepetitions += item.reps;
      return acc;
    },
    { totalCountOfRepetitions: 0, totalSumOfSpeeds: 0 },
  );

  if (result.totalSumOfSpeeds === 0 || result.totalCountOfRepetitions === 0) {
    return 0;
  }

  return result.totalSumOfSpeeds / result.totalCountOfRepetitions;
}

export function getLastFiveMonthsAverage(
  data: Array<UserStatSession | null | undefined>,
): Array<WeeklyAverage> {
  const fiveMonthsAgo = sub(new Date(), { months: 5 });
  const recentData = data.filter((item) => {
    if (!item) {
      return false;
    }

    if (item.repTypes !== WorkoutFreestyleTypes.Shooting) {
      return;
    }

    return isAfter(new Date(item.dateTime), fiveMonthsAgo);
  });

  const groupedData = groupByWeek(recentData);
  const today = new Date();
  const results: Array<WeeklyAverage> = [];

  for (let i = 0; i < 20; i++) {
    const weekDate = sub(today, { weeks: i });
    const weekKey = format(startOfWeek(weekDate), 'yyyy-MM-dd');
    const weekData = groupedData[weekKey] || [];
    const weeklyAvg = calculateWeeklyAverage(weekData);
    results.unshift({ y: weeklyAvg });
  }

  return results;
}

/*
 * Export function filterAndReformatMonthlyThrowsFormatted(
 *   data: MonthlyThrows,
 * ): Array<MonthlyThrowsFormatted> {
 *   const fiveMonthsAgo = sub(new Date(), { months: 5 });
 */

/*
 *   // Filter the entries for the last 5 months and map them to the desired format
 *   return Object.entries(data)
 *     .filter(([isoDate, _]) => {
 *       const monthDate = parseISO(isoDate); // Convert the ISO date string to a Date object
 *       return isAfter(monthDate, fiveMonthsAgo);
 *     })
 *     .map(([_, throws]) => ({ y: throws }));
 * }
 */

export function filterAndReformatMonthlyThrowsFormatted(
  data: MonthlyThrows,
): Array<MonthlyThrowsFormatted> {
  const currentDate = new Date();

  const lastFiveMonths: Array<string> = Array.from({ length: 5 }).map(
    (_, idx) => format(sub(currentDate, { months: idx }), 'yyyy-MM-01'),
  );

  return lastFiveMonths
    .map((month) => {
      const throws = data[month] || 0;
      return { y: throws };
    })
    .reverse();
}
