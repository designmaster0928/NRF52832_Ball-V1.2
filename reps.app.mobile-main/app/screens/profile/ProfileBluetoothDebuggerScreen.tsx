/* eslint-disable max-lines-per-function */
import React, { FC, useEffect } from 'react';
import {
  Button,
  Column,
  Divider,
  FlatList,
  Flex,
  Heading,
  Row,
  Text,
} from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import {
  connectToPeripheral,
  disconnectFromPeripheral,
  startScan,
  stopScan,
} from 'helpers/bluetooth.helper';

import BleManager from '../../../BleManager';
import {
  // UseDiscoveredPeripherals,
  useIsBluetoothScanning,
  usePeripheralsByState,
} from '../../hooks/useBluetooth';

const ProfileBluetoothDebuggerScreen: FC = () => {
  const isBluetoothScanning = useIsBluetoothScanning();
  const discoveredPeripherals = usePeripheralsByState(
    BluetoothPeripheralState.DISCOVERED,
  );
  // Const discoveredPeripherals = useDiscoveredPeripherals();

  useEffect(() => {
    /*
     * DiscoveredPeripherals$.subscribe((peripherals) => {
     *   // console.log('peripherals', JSON.stringify(peripherals, null, 4));
     * });
     * let intervalTestCount: number = 0;
     * const interval = setInterval(() => {
     *   intervalTestCount++;
     *   addDiscoveredPeripheral({
     *     advertising: {
     *       isConnectable: 1,
     *       kCBAdvDataRxPrimaryPHY: 129,
     *       kCBAdvDataRxSecondaryPHY: 0,
     *       kCBAdvDataTimestamp: 698536840.98547,
     *       localName: 'SFMu-13',
     *       serviceUUIDs: [Array],
     *     },
     *     id: 'A647CC62-97CD-D82E-E54B-57A3BC01FD' + intervalTestCount,
     *     name: 'SFMu-' + intervalTestCount,
     *     rssi: -47,
     *   });
     *   if (intervalTestCount === 10) {
     *     clearInterval(interval);
     *   }
     * }, 500);
     * return () => {
     *   clearInterval(interval);
     * };
     */
  }, []);

  return (
    <Flex flex={1}>
      <MainHeader title={'Bluetooth Debugger'} canGoBack={true} />
      <Button
        mt={10}
        m={4}
        onPress={(): void => {
          if (isBluetoothScanning) {
            // Console.log('Start Scan');
            stopScan();
          } else {
            startScan();
          }
        }}
      >
        {isBluetoothScanning ? 'Stop Scan' : 'Start Scan'}
      </Button>

      <Button
        m={4}
        onPress={(): void => {
          BleManager.checkState();
        }}
      >
        Check State
      </Button>

      <Heading mt={4} mx={4}>
        Discovered Devices
      </Heading>
      <Divider m={4} />
      <FlatList
        mt={2}
        m={4}
        data={discoveredPeripherals}
        renderItem={({ item }): JSX.Element => (
          <Row justifyContent={'space-between'} alignItems={'center'}>
            <Column>
              <Text>{item.name}</Text>
            </Column>
            <Column>
              <Button
                backgroundColor={'primary.400'}
                onPress={(): void => {
                  connectToPeripheral(item);
                }}
              >
                Connect
              </Button>
            </Column>
            <Column>
              <Button
                backgroundColor={'primary.400'}
                onPress={(): void => {
                  disconnectFromPeripheral(item);
                }}
              >
                Disconnect
              </Button>
            </Column>
          </Row>
        )}
      />
    </Flex>
  );
};

export default ProfileBluetoothDebuggerScreen;
