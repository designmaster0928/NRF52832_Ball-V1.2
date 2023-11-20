import { bluetoothConfig } from 'config/bluetooth.config';
import { ShotData } from 'models/ball.model';

import { getUint16FromByteArray } from './byte-array.helper';

export function parseShotData(
  byteArray: Array<number>,
  offset: number = 0,
): ShotData {
  const multipliers = bluetoothConfig.multipliers;
  const shots = getUint16FromByteArray(byteArray, offset + 0);
  const speedMetersPerSecond =
    getUint16FromByteArray(byteArray, offset + 2) * multipliers.speed;
  const speedMph = speedMetersPerSecond * multipliers.speedMph;
  const maxAcceleration =
    getUint16FromByteArray(byteArray, offset + 4) * multipliers.maxAcc;
  const duration =
    getUint16FromByteArray(byteArray, offset + 6) * multipliers.duration;
  const timeOfFlight =
    getUint16FromByteArray(byteArray, offset + 8) * multipliers.timeOfFlight;

  return {
    duration: duration,
    maxAcceleration: maxAcceleration,
    shots: shots,
    speedMetersPerSecond: speedMetersPerSecond,
    speedMph: speedMph,
    timeOfFlight: timeOfFlight,
  };
}
