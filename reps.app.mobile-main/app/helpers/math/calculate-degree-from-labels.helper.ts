export function calculateDegreeFromLabels(
  degree: number,
  labels: Array<any>,
): number {
  const perLevelDegree = degree / labels.length;
  return perLevelDegree;
}
