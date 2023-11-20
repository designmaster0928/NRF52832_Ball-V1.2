import { randomFromArray } from 'helpers/random.helper';

const dataToExport = new Array(48)
  .fill(null)
  .map((item, index) => {
    return {
      duration: randomFromArray([15, 20]),
      genre: randomFromArray(['Hip Hop', 'Pop', 'Country']),
      id: index + 1,
      imageSource: 'https://picsum.photos/42',
      personality: randomFromArray(['Luke Cometti', 'Alyssa Murray Cometti']),
      title: randomFromArray(['Standard Wall Ball', 'Daily Tune Up']),
    };
  })
  .reverse();

export const data = dataToExport;
