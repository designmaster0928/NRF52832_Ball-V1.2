import { randomFromArray } from 'helpers/random.helper';

const dataToExport = new Array(48)
  .fill(null)
  .map((item, index) => {
    return {
      coach: randomFromArray(['Luke Cometti', 'Alyssa Murray Cometti']),
      id: index + 1,
      imageSource: 'https://picsum.photos/310',
      title: randomFromArray(['Standard Wall Ball', 'Daily Tune Up']),
    };
  })
  .reverse();

export const data = dataToExport;
