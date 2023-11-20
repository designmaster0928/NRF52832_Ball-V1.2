import { randomIntFromInterval } from 'helpers/random.helper';
import { WorkoutSummaryDayValues } from 'models/training.model';

const totalDays: number = 26;
let internalArrayIndex: number = 0;

const dataToExport: Array<Array<WorkoutSummaryDayValues>> = [];

for (let currentDay = 1; currentDay <= totalDays; currentDay++) {
  if (!dataToExport[internalArrayIndex]) {
    dataToExport[internalArrayIndex] = [];
  }

  if (totalDays === currentDay) {
    dataToExport[internalArrayIndex].push('last');
  } else {
    dataToExport[internalArrayIndex].push(
      randomIntFromInterval(0, 1) ? 'yes' : 'no',
    );
  }

  if (currentDay % 7 === 0) {
    internalArrayIndex = internalArrayIndex + 1;
  }
}

export const data = dataToExport;
