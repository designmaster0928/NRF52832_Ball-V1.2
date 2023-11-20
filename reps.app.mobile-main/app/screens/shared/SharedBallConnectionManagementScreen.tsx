/* eslint-disable max-lines-per-function */
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  ScrollView,
  VStack,
} from 'native-base';

import PeripheralConnectionListItem from 'components/bluetooth/PeripheralConnectionListItem';
import TinyGrayHeader from 'components/headers/TinyGrayHeader';
import { clearDiscoveredPeripherals } from 'db/bluetooth.db';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { startScan, stopScan } from 'helpers/bluetooth.helper';

import { useIsBluetoothScanning } from '../../hooks/useBluetooth';
import { useBluetoothPeripherals } from '../../hooks/useBluetoothPeripherals.hook';
import { useMemoPeripherals } from '../../hooks/useMemoPeripherals.hook';

const { height } = Dimensions.get('window');
const maxHeight = height * 0.6;

const BallConnectionManagementScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const peripherals = useBluetoothPeripherals();

  const discoveredPeripherals = useMemoPeripherals(
    peripherals,
    BluetoothPeripheralState.DISCOVERED,
  );

  const watchedPeripherals = useMemoPeripherals(
    peripherals,
    BluetoothPeripheralState.WATCHED,
  );

  const isBluetoothScanning = useIsBluetoothScanning();

  /*
   * Const connectedPeripherals = usePeripheralsByState(
   *   BluetoothPeripheralState.CONNECTED,
   * );
   * const discoveredPeripherals = usePeripheralsByState(
   *   BluetoothPeripheralState.DISCOVERED,
   * );
   * const previouslyConnectedPeripherals = usePeripheralsByState(
   *   BluetoothPeripheralState.PREVIOUSLY_CONNECTED,
   * );
   */

  /*
   * Const watchedPeripherals = usePeripheralsByState(
   *   BluetoothPeripheralState.WATCHED,
   * );
   */

  const [animation] = useState(new Animated.Value(-500));

  const scrollRef = useRef();

  useEffect(() => {
    Animated.timing(animation, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();

    clearDiscoveredPeripherals([BluetoothPeripheralState.WATCHED]);

    // StartScan();

    return (): void => {
      // StopScan();
    };
  }, []);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    startScan(false, 5);
  }, []);

  useEffect(() => {
    if (!isBluetoothScanning) {
      setIsRefreshing(false);
    }
  }, [isBluetoothScanning]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={(): void => {
          navigation.goBack();
        }}
      >
        <Flex
          w={'100%'}
          h={'100%'}
          bg={'black:alpha.60'}
          position={'absolute'}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          {
            transform: [{ translateY: animation }],
          },
        ]}
      >
        <VStack w={'100%'} maxHeight={maxHeight} bg={'white'}>
          <Box safeAreaTop />
          <ScrollView
            pb={4}
            ref={scrollRef}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
          >
            <TinyGrayHeader
              title={'Watched'}
              isHidden={!watchedPeripherals?.length}
            />

            {watchedPeripherals?.map((peripheral) => {
              return (
                <PeripheralConnectionListItem
                  peripheralState={BluetoothPeripheralState.WATCHED}
                  key={peripheral.id}
                  peripheral={peripheral}
                />
              );
            })}

            {/* <TinyGrayHeader
              title={'Connected'}
              isHidden={!connectedPeripherals?.length}
            />

            {connectedPeripherals?.map((peripheral) => {
              return (
                <PeripheralConnectionListItem
                  peripheralState={BluetoothPeripheralState.CONNECTED}
                  key={peripheral.id}
                  peripheral={peripheral}
                />
              );
            })} */}

            {/* <TinyGrayHeader
              title={'Previously Connected'}
              isHidden={!previouslyConnectedPeripherals?.length}
            />

            {previouslyConnectedPeripherals?.map((peripheral) => {
              return (
                <PeripheralConnectionListItem
                  peripheralState={
                    BluetoothPeripheralState.PREVIOUSLY_CONNECTED
                  }
                  key={peripheral.id}
                  peripheral={peripheral}
                />
              );
            })} */}

            <TinyGrayHeader
              title={'Discovered'}
              isHidden={!discoveredPeripherals?.length}
            />

            {discoveredPeripherals?.map((peripheral) => {
              return (
                <PeripheralConnectionListItem
                  peripheralState={BluetoothPeripheralState.DISCOVERED}
                  key={peripheral.id}
                  peripheral={peripheral}
                />
              );
            })}

            <Box mt={4} />

            {!watchedPeripherals?.length || !discoveredPeripherals?.length ? (
              <>
                <Heading
                  color={'defaultText.400'}
                  fontSize={'sm'}
                  alignContent={'center'}
                  textAlign={'center'}
                >
                  Tap "Scan for New Balls" to add your ball.
                </Heading>
              </>
            ) : (
              <></>
            )}
          </ScrollView>
          <HStack mx={4} mb={4} mt={4} justifyContent={'center'}>
            <Button
              isLoadingText="Scanning..."
              onPress={(): void => {
                startScan(false, 10);
              }}
              isLoading={isBluetoothScanning}
              bg={'primary.400'}
              _pressed={{
                bg: 'primary.600',
              }}
              _text={{
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Scan for New Balls
            </Button>
            <Button
              onPress={(): void => {
                navigation.goBack();
                stopScan();
              }}
              variant="outline"
              colorScheme="primary"
              _text={{
                fontSize: 16,
                fontWeight: 700,
              }}
              ml={4}
            >
              Close
            </Button>
          </HStack>
        </VStack>
      </Animated.View>
    </>
  );
};

export default BallConnectionManagementScreen;
