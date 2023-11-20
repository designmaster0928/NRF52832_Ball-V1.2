import { randomIntFromInterval } from 'helpers/random.helper';

let mockValue: number = 50;

const dataToExport = new Array(10).fill(null).map(() => {
  mockValue = mockValue + randomIntFromInterval(0, 5);

  return {
    y: mockValue,
  };
});

export const data = dataToExport;
