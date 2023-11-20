import { SectionListData } from 'react-native';
import { format, getDate, getYear, parseISO } from 'date-fns';
import { capitalize } from 'lodash';

import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { HistoryListDataItem } from 'models/list.model';
import { UserStatSession } from 'models/user-stats.model';

const statUnit = 'mph'; // Hard-coded, adjust as needed

export function mapSessionToWorkoutHistory(
  sessions: Array<UserStatSession>,
): Array<SectionListData<HistoryListDataItem | null>> {
  // First, sort the original array by dateTime
  sessions.sort(
    (a, b) => new Date(a.dateTime).valueOf() - new Date(b.dateTime).valueOf(),
  );

  sessions.reverse();

  let finalObject: Record<string, any> = {};

  // Then, map each object to the new format
  sessions.forEach((session) => {
    const date = parseISO(session.dateTime);
    const year = getYear(date);
    const month = format(date, 'MMM'); // Gets the short month name
    const day = getDate(date);

    const newObject = {
      day: day.toString(),
      id: session.achievementId,
      month: month,
      stats:
        session.repTypes === WorkoutFreestyleTypes.Shooting
          ? [
              {
                stat: session.averageSpeed.toFixed(0),
                statUnit: statUnit,
                title: 'Avg',
              },
              {
                stat: session.topSpeed.toFixed(0),
                statUnit: statUnit,
                title: 'Top',
              },
              {
                stat: session.reps,
                title: 'Shots',
              },
            ]
          : [
              {
                stat: Math.ceil(session.sessionTime / 60).toString(),
                statUnit: 'min',
                title: 'Duration',
              },
              {
                stat: session.reps,
                title: 'Reps',
              },
            ],
      supTitle:
        session.repTypes === WorkoutFreestyleTypes.Shooting ? 'shooting' : '',
      title:
        session.repTypes === WorkoutFreestyleTypes.Shooting
          ? capitalize(session.hand)
          : 'Wallball',
    };

    const key = year + '-' + format(date, 'MM') + '-' + '01'; // Key now includes the year

    // Initialize the month array if it doesn't exist yet
    if (!finalObject[key]) {
      finalObject = {
        ...finalObject,
        [key]: [],
      };
    }

    // Push the new object to the appropriate month array
    finalObject[key].push(newObject);
  });

  const mappedListData = Object.entries(finalObject).map(([key, obj]) => {
    return {
      data: obj,
      title: key,
    };
  });

  return mappedListData;
}
