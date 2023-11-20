import { addLeadingZeros } from './number.helper';

export function convertMillisecondsToFormattedTime(
  milliseconds: number,
): string {
  const minutes: number = Math.floor(milliseconds / 1000 / 60);
  const seconds: number = Math.floor((milliseconds / 1000) % 60);

  return `00:${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
}
