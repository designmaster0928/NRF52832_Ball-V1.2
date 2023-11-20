import { randomIntFromInterval } from 'helpers/random.helper';
import { convertMillisecondsToFormattedTime } from 'helpers/time.helper';

let mockTime: number = 2000;

const dataToExport = new Array(57)
  .fill(null)
  .map((item, index) => {
    mockTime = mockTime + randomIntFromInterval(2000, 7000);

    return {
      id: index + 1,
      speed: randomIntFromInterval(40, 70),
      time: convertMillisecondsToFormattedTime(mockTime),
    };
  })
  .reverse();

export const data = dataToExport;
