import AsyncStorage from '@react-native-async-storage/async-storage';
import { merge } from 'lodash';

import { dbConfig } from 'config/db.config';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import {
  BluetoothPeripheralPayload,
  BluetoothPeripheralStatePayload,
} from 'models/bluetooth.model';

import { MMKV } from './mmkv-storage.db';

const peripheralsStorageKey = dbConfig.storageKeys.bluetoothPeripherals;

let connectedPeripherals: Record<string, BluetoothPeripheralPayload> | null =
  null;

// Generic Peripheral Storage

export function getPeripherals(
  state?: BluetoothPeripheralState,
): Record<string, BluetoothPeripheralStatePayload> | null {
  const peripherals =
    MMKV.getMap<Record<string, BluetoothPeripheralStatePayload>>(
      peripheralsStorageKey,
    ) || {};

  if (state) {
    return Object.fromEntries(
      Object.entries(peripherals).filter(
        ([, peripheral]) => peripheral.state === state,
      ),
    );
  }

  return peripherals;
}

export function savePeripheral(
  peripheralPayload: BluetoothPeripheralStatePayload,
  skipStates?: Array<BluetoothPeripheralState>,
): void {
  let peripherals = getPeripherals() || {};
  const peripheral = peripheralPayload.peripheral;

  if (
    skipStates &&
    skipStates.indexOf(peripherals[peripheral.id]?.state) !== -1
  ) {
    return;
  }

  peripherals = {
    ...peripherals,
    [peripheral.id]: merge(peripherals[peripheral.id] || {}, peripheralPayload),
  };

  MMKV.setMap(peripheralsStorageKey, peripherals);
}

export function deletePeripheral(peripheralId: string): void {
  const peripherals = getPeripherals();

  if (peripherals) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [peripheralId]: deletedPeripheral, ...rest } = peripherals;

      MMKV.setMap(peripheralsStorageKey, rest);
    } catch (error) {
      // NOOP
    }
  }
}

export function clearPeripherals(
  skipStates?: Array<BluetoothPeripheralState>,
): void {
  if (skipStates) {
    const peripherals = getPeripherals() || {};

    const prunedEntries = Object.fromEntries(
      Object.entries(peripherals).filter(
        ([, peripheral]) => skipStates?.indexOf(peripheral.state) !== -1,
      ),
    );

    MMKV.setMap(peripheralsStorageKey, prunedEntries);
  } else {
    MMKV.setMap(peripheralsStorageKey, {});
  }
}

// Specific peripheral states

export async function saveWatchedPeripheral(
  peripheralPayload: BluetoothPeripheralPayload,
): Promise<void> {
  savePeripheral({
    peripheral: peripheralPayload,
    state: BluetoothPeripheralState.WATCHED,
  });
}

export function getWatchedPeripherals(): Record<
  string,
  BluetoothPeripheralStatePayload
> | null {
  return getPeripherals();
}

export async function removeWatchedPeripheral(
  peripheralPayload: BluetoothPeripheralStatePayload,
): Promise<void> {
  deletePeripheral(peripheralPayload.peripheral.id);
}

export async function saveDiscoveredPeripheral(
  peripheralPayload: BluetoothPeripheralPayload,
): Promise<void> {
  savePeripheral(
    {
      peripheral: peripheralPayload,
      state: BluetoothPeripheralState.DISCOVERED,
    },
    [BluetoothPeripheralState.WATCHED],
  );
}

export function getDiscoveredPeripherals(): Record<
  string,
  BluetoothPeripheralStatePayload
> | null {
  return getPeripherals();
}

export async function removeDiscoveredPeripheral(
  peripheralPayload: BluetoothPeripheralStatePayload,
): Promise<void> {
  deletePeripheral(peripheralPayload.peripheral.id);
}

export const clearDiscoveredPeripherals = clearPeripherals;

// Legacy code

export async function saveConnectedPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  const peripherals = connectedPeripherals || (await getConnectedPeripherals());

  if (peripherals) {
    connectedPeripherals = {
      ...peripherals,
      [peripheral.id]: merge(peripherals[peripheral.id] || {}, peripheral),
    };
  } else {
    connectedPeripherals = {
      [peripheral.id]: peripheral,
    };
  }

  // await AsyncStorage.setItem(
  //   dbConfig.storageKeys.connectedPeripherals,
  //   JSON.stringify(connectedPeripherals),
  // );
}

export async function deleteConnectedPeripheral(
  peripheral: BluetoothPeripheralPayload,
): Promise<void> {
  const peripherals = await getConnectedPeripherals();

  if (peripherals) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [peripheral.id]: deletedPeripheral, ...rest } = peripherals;

    connectedPeripherals = rest;

    // await AsyncStorage.setItem(
    //   dbConfig.storageKeys.connectedPeripherals,
    //   JSON.stringify(connectedPeripherals),
    // );

    // Console.log('Removed connected peripheral: ', deletedPeripheral.id);
  }
}

export async function getConnectedPeripherals(): Promise<
  Record<string, BluetoothPeripheralPayload>
> {
  if (connectedPeripherals) {
    return connectedPeripherals;
  }

  // const peripherals = await AsyncStorage.getItem(
  //   dbConfig.storageKeys.connectedPeripherals,
  // );

  // return peripherals ? JSON.parse(peripherals) : {};
}
