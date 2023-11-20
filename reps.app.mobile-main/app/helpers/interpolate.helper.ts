/**
 * Returns a bezier interpolated value, using the given ranges
 * @param {number} value  Value to be interpolated
 * @param {number} s1 Source range start
 * @param {number} s2  Source range end
 * @param {number} t1  Target range start
 * @param {number} t2  Target range end
 * @param {number} [slope]  Weight of the curve (0.5 = linear, 0.1 = weighted near target start, 0.9 = weighted near target end)
 * @returns {number} Interpolated value
 */
export function interpolate(
  value: number,
  s1: number,
  s2: number,
  t1: number,
  t2: number,
  slope: number,
): number {
  //Default to linear interpolation
  slope = slope || 0.5;

  //If the value is out of the source range, floor to min/max target values
  if (value < Math.min(s1, s2)) {
    return Math.min(s1, s2) === s1 ? t1 : t2;
  }

  if (value > Math.max(s1, s2)) {
    return Math.max(s1, s2) === s1 ? t1 : t2;
  }

  //Reverse the value, to make it correspond to the target range (this is a side-effect of the bezier calculation)
  value = s2 - value;

  const C1 = { x: s1, y: t1 }; //Start of bezier curve
  const C3 = { x: s2, y: t2 }; //End of bezier curve
  const C2 = {
    //Control point
    x: C3.x,
    y: C1.y + Math.abs(slope) * (C3.y - C1.y),
  };

  //Find out how far the value is on the curve
  const percent = value / (C3.x - C1.x);

  return Math.floor(
    C1.y * b1(percent) + C2.y * b2(percent) + C3.y * b3(percent),
  );

  function b1(t: number): number {
    return t * t;
  }
  function b2(t: number): number {
    return 2 * t * (1 - t);
  }
  function b3(t: number): number {
    return (1 - t) * (1 - t);
  }
}
