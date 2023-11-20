export function calculateAverageFromArray(array: Array<number>): number {
  const sum = array.reduce((a, b) => a + b, 0);
  const avg = sum / array.length || 0;
  return avg;
}
