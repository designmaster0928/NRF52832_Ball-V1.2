import { useEffect, useMemo, useState } from 'react';

import { filter, map, Subject, throttleTime, withLatestFrom } from 'rxjs';

import { startScan, stopScan } from 'helpers/bluetooth.helper';
import { discoveredPeripherals$ } from 'streams/bluetooth.stream';

import { calculateDistance } from '../utils/bluetooth.util';

export function useBluetoothDistanceToPeripheral(
  peripheralId?: string,
): number {
  const [distance, setDistance] = useState<number>(0);

  const peripheralIdSubject$ = useMemo(() => {
    return new Subject<string>();
  }, []);

  useEffect(() => {
    if (peripheralId) {
      peripheralIdSubject$.next(peripheralId);
    }
  }, [peripheralId]);

  useEffect(() => {
    startScan(true);
    const subscription = discoveredPeripherals$
      .pipe(
        withLatestFrom(peripheralIdSubject$),
        // throttleTime(1000),
        filter(([discoveredPeripheral, selectedPeripheralId]) => {
          return discoveredPeripheral.id === selectedPeripheralId;
        }),
        map(([discoveredPeripheral]) => {
          const rssi = discoveredPeripheral.rssi;
          return calculateDistance(rssi, 'feet');
        }),
      )
      .subscribe((calculatedDistance) => {
        if (calculatedDistance > 50) {
          setDistance(50);
        } else {
          setDistance(Math.ceil(calculatedDistance));
        }
      });

    return () => {
      subscription.unsubscribe();
      stopScan();
    };
  }, []);

  return distance;
}
