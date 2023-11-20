export function addLeadingZeros(num: number, totalLength: number): string {
  return String(num).padStart(totalLength, '0');
}

export function splitNumber(number: number): {
  integer: number;
  decimal: number;
} {
  const numberParts = String(number).split('.');
  const integer = parseInt(numberParts[0], 10);
  const decimal = parseInt(numberParts[1] || '0', 10);

  return {
    decimal,
    integer,
  };
}
