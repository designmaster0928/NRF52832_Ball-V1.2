import { useMemo } from 'react';

import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import {
  BluetoothPeripheralPayload,
  BluetoothPeripheralStatePayload,
} from 'models/bluetooth.model';

export function useMemoPeripherals(
  peripheralPayloads: Record<string, BluetoothPeripheralStatePayload>,
  state: BluetoothPeripheralState,
): Array<BluetoothPeripheralPayload> {
  return useMemo(() => {
    if (!peripheralPayloads) {
      return [];
    }

    return Object.values(peripheralPayloads)
      .filter((peripheralPayload) => peripheralPayload.state === state)
      .map((peripheralPayload) => peripheralPayload.peripheral);
  }, [peripheralPayloads]);
}
