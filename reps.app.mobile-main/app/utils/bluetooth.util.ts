type DistanceUnit = 'meters' | 'feet';

export function calculateDistance(
  RSSI: number,
  unit: DistanceUnit = 'meters',
  A: number = -59,
  n: number = 2.0,
): number {
  const d0 = 1.0; // Reference distance in meters
  const exp = (A - RSSI) / (10 * n); // Corrected expression
  let distance = d0 * Math.pow(10, exp);

  // Convert distance to feet if 'feet' is specified as the unit
  if (unit === 'feet') {
    distance *= 3.28084;
  }

  return distance;
}
