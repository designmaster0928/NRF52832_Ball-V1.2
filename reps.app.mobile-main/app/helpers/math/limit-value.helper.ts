function limitValue(
  value: number,
  minValue: number,
  maxValue: number,
  allowedDecimals: number,
): number {
  let currentValue = 0;
  if (!isNaN(value)) {
    if (!isNaN(allowedDecimals) && allowedDecimals > 0) {
      currentValue = parseFloat(
        String(
          value.toFixed(
            allowedDecimals < 4 ? parseInt(String(allowedDecimals), 10) : 4,
          ),
        ),
      );
    } else {
      currentValue = parseInt(String(value), 10);
    }
  }
  return Math.min(Math.max(currentValue, minValue), maxValue);
}

export default limitValue;
