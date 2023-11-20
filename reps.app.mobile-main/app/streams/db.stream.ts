// Store Peripherals in DB

import { distinct, tap } from 'rxjs';

import {
  deleteConnectedPeripheral,
  removeWatchedPeripheral,
  saveConnectedPeripheral,
  saveWatchedPeripheral,
} from 'db/bluetooth.db';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { addRxjsObservableToBeSubscribed } from 'helpers/rxjs-subscription.helper';
import { BluetoothPeripheralStatePayload } from 'models/bluetooth.model';

import { peripheralsStateSubject$ } from './bluetooth.stream';

const storePeripherals$ = peripheralsStateSubject$.pipe(
  distinct(),
  tap((peripheralState: BluetoothPeripheralStatePayload) => {
    // Console.log('storePeripherals$', peripheralState);

    if (peripheralState.state === BluetoothPeripheralState.FORGOTTEN) {
      deleteConnectedPeripheral(peripheralState.peripheral);
      removeWatchedPeripheral(peripheralState);
    }

    if (peripheralState.state === BluetoothPeripheralState.CONNECTED) {
      saveConnectedPeripheral(peripheralState.peripheral);
    }

    if (peripheralState.state === BluetoothPeripheralState.WATCHED) {
      saveWatchedPeripheral(peripheralState);
    }
  }),
);

addRxjsObservableToBeSubscribed(storePeripherals$);
