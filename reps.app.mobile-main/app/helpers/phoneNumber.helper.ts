const usCountryCode = '+1';

export function formatPhoneNumber(suspect: string): string {
  const phoneNumber = suspect.replace(/[\s()a-zA-Z-]/g, '');

  if (phoneNumber.indexOf(usCountryCode) === 0 && phoneNumber.length === 12) {
    return phoneNumber;
  }

  if (phoneNumber.indexOf('+') !== 0 && phoneNumber.length === 10) {
    return `${usCountryCode}${phoneNumber}`;
  }

  return phoneNumber;
}
