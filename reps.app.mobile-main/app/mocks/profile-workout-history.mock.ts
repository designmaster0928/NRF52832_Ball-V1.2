import { SectionListData } from 'react-native';

import { randomFromArray, randomIntFromInterval } from 'helpers/random.helper';
import { HistoryListDataItem } from 'models/list.model';

const months: Array<string> = [
  'July',
  'June',
  'May',
  'April',
  'March',
  'February',
  'January',
];

let currentDay = 28;

const dataToExport = months.map((month: string) => {
  return {
    data: new Array(12).fill(null).map((item, index) => {
      if (index === 0) {
        currentDay = 29;
      }

      currentDay = currentDay - randomIntFromInterval(1, 3);
      const shortMonth = month.substring(0, 3);

      return randomFromArray([
        {
          day: String(currentDay),
          id: `${month}-${index}`,
          month: shortMonth,
          stats: [
            {
              stat: String(randomIntFromInterval(6, 30)),
              title: 'Shots',
            },
            {
              stat: String(randomIntFromInterval(10, 99)),
              title: 'Avg',
            },
            {
              stat: String(randomIntFromInterval(47, 99)),
              title: 'Top',
            },
          ],
          workoutOption: randomFromArray(['Right', 'Left', 'Mixed']),
          workoutType: 'Freestyle',
        },
        {
          day: String(currentDay),
          id: `${month}-${index}`,
          month: shortMonth,
          stats: [
            {
              stat: String(randomIntFromInterval(6, 72)),
              title: 'Shots',
            },
          ],
          workoutOption: randomFromArray(['Wallball']),
          workoutType: 'Daily Tune up',
        },
        {
          day: String(currentDay),
          id: `${month}-${index}`,
          month: shortMonth,
          stats: [
            {
              stat: String(randomIntFromInterval(6, 72)),
              title: 'Shots',
            },
          ],
          workoutOption: randomFromArray(['N/A']),
          workoutType: 'Standard Wallball',
        },
      ]);
    }),
    title: month,
  };
});

export const data: Array<SectionListData<HistoryListDataItem | null>> =
  dataToExport;
