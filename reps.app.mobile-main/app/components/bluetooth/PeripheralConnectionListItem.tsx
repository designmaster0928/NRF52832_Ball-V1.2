import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Heading, HStack, Spinner, VStack } from 'native-base';

import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { forgetPeripheral, stopScan } from 'helpers/bluetooth.helper';
import {
  disconnectFromPeripheral,
  watchPeripheral,
} from 'helpers/bluetooth-connection.helper';
import { BluetoothPeripheralPayload } from 'models/bluetooth.model';
import { isPeripheralConnectingSubject$ } from 'streams/bluetooth.stream';

import { useIsPeripheralConnecting } from '../../hooks/useBluetooth';

interface Props {
  peripheral?: BluetoothPeripheralPayload;
  peripheralState?: BluetoothPeripheralState;
}

function renderButton(
  peripheral: BluetoothPeripheralPayload,
  peripheralState: BluetoothPeripheralState | undefined,
): JSX.Element {
  let title: string | null;
  let onPress: (() => void) | null;
  let buttonColor: string | null;

  switch (peripheralState) {
    case BluetoothPeripheralState.WATCHED:
    case BluetoothPeripheralState.CONNECTED:
    case BluetoothPeripheralState.PREVIOUSLY_CONNECTED:
      buttonColor = 'primary.500';
      title = 'FORGET';
      onPress = async (): Promise<void> => {
        await stopScan();
        await forgetPeripheral(peripheral);
        /*
         * Await disconnectFromPeripheral(peripheral);
         * await startScan();
         */
      };
      break;
    case BluetoothPeripheralState.DISCOVERED:
      buttonColor = 'primary.500';
      title = 'WATCH';
      onPress = (): void => {
        watchPeripheral(peripheral);
      };
      break;
    case BluetoothPeripheralState.CONNECTING:
      buttonColor = 'red.500';
      title = 'CANCEL';
      onPress = (): void => {
        isPeripheralConnectingSubject$.next({
          isConnecting: false,
          peripheralId: peripheral.id,
        });
        disconnectFromPeripheral(peripheral);
      };
      break;
    default:
      title = null;
      onPress = null;
      buttonColor = null;
      break;
  }

  if (onPress && title && buttonColor) {
    return (
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{
          bottom: 10,
          left: 10,
          right: 10,
          top: 10,
        }}
      >
        <Heading
          fontSize={10}
          fontWeight={700}
          lineHeight={'13'}
          color={buttonColor}
          ml={4}
        >
          {title}
        </Heading>
      </TouchableOpacity>
    );
  } else {
    return <></>;
  }
}

const PeripheralConnectionListItem: FC<Props> = ({
  peripheral,
  peripheralState,
}): JSX.Element => {
  const isBluetoothConnecting = useIsPeripheralConnecting(peripheral?.id || '');

  if (!peripheral || !peripheralState) {
    return <></>;
  }

  return (
    <HStack style={styles.item} bg={'white'} mx={4} mt={6} p={4}>
      <VStack>
        <Heading
          fontSize={12}
          fontWeight={700}
          lineHeight={'16'}
          color={'#423F42'}
        >
          {peripheral?.name || 'Unnamed Device'}
        </Heading>
        <Heading
          fontSize={10}
          fontWeight={700}
          lineHeight={12}
          color={'#B6B6B6'}
        >
          ID: {peripheral?.id.slice(-8) || 'No ID'}
        </Heading>
      </VStack>
      {/* <VStack alignItems={'flex-end'} justifyContent={'center'} flex={1}>
        <Image
          alt={'Ball Icon'}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require('assets/brand/temp-home/r-1-smart-ball-2.png')}
          size={'xs'}
        />
      </VStack> */}
      <VStack alignItems={'flex-end'} justifyContent={'center'} flex={1}>
        <HStack alignItems={'center'} justifyContent={'flex-end'}>
          {isBluetoothConnecting ? (
            <HStack justifyContent={'flex-end'} alignItems={'center'}>
              <Spinner accessibilityLabel="Connecting to Peripheral" mr={2} />
              {renderButton(peripheral, BluetoothPeripheralState.CONNECTING)}
            </HStack>
          ) : (
            <>
              {renderButton(peripheral, peripheralState)}
              {/* {peripheralState ===
                BluetoothPeripheralState.PREVIOUSLY_CONNECTED &&
                renderButton(peripheral, BluetoothPeripheralState.DISCOVERED)} */}
            </>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  item: {
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
});

export default PeripheralConnectionListItem;
