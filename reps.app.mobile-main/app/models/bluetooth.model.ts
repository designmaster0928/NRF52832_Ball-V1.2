import { BluetoothPeripheralState } from 'enums/bluetooth.enum';

interface BluetoothManufacturerData {
  CDVType: string;
  data: string;
  bytes: Array<number>;
}

export interface BluetoothAdvertisingPayload {
  isConnectable: 0 | 1;
  kCBAdvDataRxPrimaryPHY: number;
  kCBAdvDataRxSecondaryPHY: number;
  kCBAdvDataTimestamp: number;
  localName: string;
  serviceUUIDs: Array<string>;
  manufacturerData: BluetoothManufacturerData;
}

export interface BluetoothPeripheralPayload {
  advertising: BluetoothAdvertisingPayload;
  characteristics: Array<any>;
  id: string;
  name: string;
  rssi: number;
  services: Array<any>;
}

export interface BluetoothCharacteristicPayload {
  characteristicUUID: string;
  peripheralUUID: string;
  value: Array<number>;
}

export interface BluetoothPeripheralStatePayload {
  state: BluetoothPeripheralState;
  peripheral: BluetoothPeripheralPayload;
}

export interface BluetoothPeripheralConnectionPayload {
  peripheralId: string;
  isConnecting: boolean;
}

export interface BluetoothInternalAdvertisementPayload {
  id: string;
  payload: BluetoothAdvertisingPayload;
}

export interface BluetoothInternalCharacteristicPayload {
  id: string;
  payload: BluetoothCharacteristicPayload;
}

export interface BluetoothCharacteristicValuePayload {
  characteristicUUID: string;
  peripheralUUID: string;
  value: Array<number>;
}
