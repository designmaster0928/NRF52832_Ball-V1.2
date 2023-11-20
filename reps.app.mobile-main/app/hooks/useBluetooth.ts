import { useEffect, useRef, useState } from 'react';

import {
  distinct,
  distinctUntilChanged,
  map,
  shareReplay,
  Subscription,
  tap,
} from 'rxjs';

import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { BluetoothPeripheralPayload } from 'models/bluetooth.model';
import {
  isBluetoothScanning$,
  isPeripheralConnecting$,
  peripheralsState$,
} from 'streams/bluetooth.stream';

export function useIsBluetoothScanning(): boolean {
  const [isScanning, setIsScanning] = useState(false);
  useEffect(() => {
    const subscription = isBluetoothScanning$.subscribe(setIsScanning);
    return () => subscription.unsubscribe();
  }, []);
  return isScanning;
}

export function useIsPeripheralConnecting(peripheralId?: string): boolean {
  const [isConnecting, setIsConnecting] = useState(false);
  useEffect(() => {
    const subscription = isPeripheralConnecting$
      .pipe(
        map((peripheralIds: Array<string>) => {
          if (peripheralId) {
            return peripheralIds.includes(peripheralId);
          } else {
            return peripheralIds.length > 0;
          }
        }),
      )
      .subscribe(setIsConnecting);
    return () => subscription.unsubscribe();
  }, []);
  return isConnecting;
}

export function usePeripheralsByState(
  state: BluetoothPeripheralState,
): Array<BluetoothPeripheralPayload> | undefined {
  const [discoveredPeripherals, setDiscoveredPeripherals] =
    useState<Array<BluetoothPeripheralPayload>>();

  const subscriptionRef = useRef<Subscription | null>();

  function subscribeByState(stateInternal: BluetoothPeripheralState): void {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    subscriptionRef.current = peripheralsState$
      .pipe(
        map((peripheralStateMap) => Array.from(peripheralStateMap.values())),
        map((peripheralStatePayloads) =>
          // Filter out peripherals that are not discovered
          peripheralStatePayloads
            .filter((peripheralStatePayload) => {
              return peripheralStatePayload.state === stateInternal;
            })

            // Return just the peripheral payload
            .map((peripheralStatePayload) => peripheralStatePayload.peripheral),
        ),
        distinct(),
      )
      .subscribe(setDiscoveredPeripherals);
  }

  useEffect(() => {
    subscribeByState(state);
    return () => subscriptionRef.current?.unsubscribe();
  }, [state]);

  return discoveredPeripherals;
}

export function useIsAnyPeripheralConnected(): boolean {
  const connectedPeripherals = usePeripheralsByState(
    BluetoothPeripheralState.CONNECTED,
  );

  return !!connectedPeripherals && connectedPeripherals.length > 0;
}
