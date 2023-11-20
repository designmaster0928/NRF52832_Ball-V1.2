export const bluetoothConfig = {
  characteristicUUIDs: {
    lastThrowAcc: '1BC51013-0200-B8BE-E611-E60C60B7C467',
    lastThrowStats: '1BC51101-0200-B8BE-E611-E60C60B7C467',
  },
  multipliers: {
    duration: 0.001,
    maxAcc: 0.0025,
    speed: 0.01,
    speedMph: 2.23694,
    timeOfFlight: 0.00125,
  },
  publicServiceUUIDs: [
    '1BC50001-0200-B8BE-E611-E60C60B7C467',
    '1BC50001-0200-B8BE-E611-E60C60B7C457',
  ],
  rootServiceUUID: '1BC50001-0200-B8BE-E611-E60C60B7C467',
  scanForSeconds: 2, // 60 * 10,
};
