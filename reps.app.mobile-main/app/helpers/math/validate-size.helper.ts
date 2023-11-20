export function validateSize(current: number, original: number): number {
  let currentSize = original;
  if (!isNaN(current)) {
    currentSize = parseInt(String(current), 10);
  }
  return currentSize;
}
