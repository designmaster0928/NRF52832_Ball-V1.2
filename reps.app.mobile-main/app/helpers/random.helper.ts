export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFloatFromInterval(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(4));
}

export function randomFromArray<T>(options: Array<T>): T {
  return options[randomIntFromInterval(0, options.length - 1)];
}
