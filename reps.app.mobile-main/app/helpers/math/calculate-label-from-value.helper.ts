import { Label } from 'models/speedometer.model';

export function calculateLabelFromValue(
  value: number,
  labels: Array<Label>,
  minValue: number,
  maxValue: number,
): Label {
  const currentValue = (value - minValue) / (maxValue - minValue);
  const currentIndex = Math.round((labels.length - 1) * currentValue);
  const label = labels[currentIndex];
  return label;
}
