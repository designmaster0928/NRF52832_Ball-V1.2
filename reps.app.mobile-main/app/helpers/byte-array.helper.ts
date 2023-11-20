import { Buffer } from 'buffer';

export function getFloat32FromByteArray(
  byteArray: Array<number>,
  start: number,
  byteSize: number = 2,
): number {
  return Buffer.from(byteArray.slice(start, start + byteSize)).readFloatLE(0);
}

export function getUint16FromByteArray(
  byteArray: Array<number>,
  start: number,
  byteSize: number = 2,
): number {
  return Buffer.from(byteArray.slice(start, start + byteSize)).readUint16LE(0);
}
