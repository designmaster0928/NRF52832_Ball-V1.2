/* eslint-disable max-lines-per-function */
import React, { FC, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  Box,
  Center,
  CheckIcon,
  Flex,
  Heading,
  HStack,
  Select,
  Text,
  VStack,
} from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import Pulse from 'components/pulse/Pulse';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';
import { interpolate } from 'helpers/interpolate.helper';

import { useBluetoothDistanceToPeripheral } from '../../hooks/useBluetoothDistanceToPeripheral.hook';
import { useBluetoothPeripherals } from '../../hooks/useBluetoothPeripherals.hook';
import { useMemoPeripherals } from '../../hooks/useMemoPeripherals.hook';

const windowWidth = Dimensions.get('window').width;
// const diameter = Math.floor(windowWidth * 0.95);

const ProfileFindMyBallScreen: FC = () => {
  const [deviceId, setDeviceId] = useState<string | undefined>();
  const peripherals = useBluetoothPeripherals();

  const watchedPeripherals = useMemoPeripherals(
    peripherals,
    BluetoothPeripheralState.WATCHED,
  );

  const distance = useBluetoothDistanceToPeripheral(deviceId);

  useEffect(() => {
    if (watchedPeripherals.length === 1) {
      setDeviceId(watchedPeripherals[0].id);
    }
  }, []);

  return (
    <Flex flex={1}>
      <MainHeader title={'Account Settings'} canGoBack={true} />
      <VStack flex={1}>
        {watchedPeripherals.length > 1 ? (
          <Center mt={4} mx={4}>
            <Select
              bg={'primary.400'}
              placeholderTextColor={'white'}
              w={'100%'}
              py={4}
              selectedValue={deviceId}
              accessibilityLabel="Select device to find"
              placeholder="Select device to find"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue): void => setDeviceId(itemValue)}
            >
              {watchedPeripherals.map((peripheral) => {
                return (
                  <Select.Item
                    label={peripheral.name}
                    value={peripheral.id}
                    key={peripheral.id}
                  />
                );
              })}
            </Select>
          </Center>
        ) : (
          <>
            <Heading
              mt={4}
              fontSize={24}
              fontWeight={600}
              lineHeight={32}
              textAlign={'center'}
            >
              {watchedPeripherals.length > 0
                ? `Looking for ${watchedPeripherals[0]?.name}`
                : ''}
            </Heading>
          </>
        )}

        <Flex alignItems={'center'} justifyContent={'center'} h={windowWidth}>
          {watchedPeripherals.length > 0 ? (
            <Pulse duration={interpolate(distance, 0, 30, 500, 3000, 0.5)} />
          ) : (
            <></>
          )}
          {/* <Pulse
            color={'white'}
            diameter={diameter}
            duration={interpolate(distance, 0, 50, 500, 5000, 0.5)}
            initialDiameter={50}
            numPulses={3}
            speed={interpolate(distance, 0, 50, 5, 50, 0.5)}
          /> */}
          <Box
            alignItems={'center'}
            bg={'#311302'}
            borderRadius={'50'}
            h={100}
            justifyContent={'center'}
            w={100}
          >
            <Text fontSize={40} fontWeight={800} lineHeight={56}>
              R1
            </Text>
          </Box>
        </Flex>
        {distance > 0 || watchedPeripherals.length === 1 ? (
          <Flex alignItems={'center'} justifyContent={'center'} pt={4}>
            <Heading
              fontSize={24}
              fontWeight={600}
              lineHeight={32}
              textAlign={'center'}
            >
              You are within
            </Heading>
            <HStack alignItems={'flex-end'}>
              <Text
                fontSize={96}
                fontWeight={700}
                lineHeight={124}
                textAlign={'center'}
                h={100}
              >
                {distance}
              </Text>
              <Text
                fontSize={36}
                fontWeight={600}
                lineHeight={40}
                h={'36'}
                ml={2}
              >
                {distance === 1 ? 'feet' : 'foot'}
              </Text>
            </HStack>
          </Flex>
        ) : (
          <>
            <Heading
              fontSize={24}
              fontWeight={600}
              lineHeight={32}
              textAlign={'center'}
              px={4}
            >
              {watchedPeripherals.length > 0
                ? 'Select a device to get started.'
                : 'Add a device using the R1 button at the top right of your screen to get started.'}
            </Heading>
          </>
        )}

        {/* <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
          <Slider
            accessibilityLabel="hello world"
            defaultValue={50}
            maxValue={50}
            maxW="300"
            minValue={0}
            onChange={(v): void => {
              setDistance(Math.floor(v));
            }}
            step={1}
            w="3/4"
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Flex> */}
      </VStack>
    </Flex>
  );
};

export default ProfileFindMyBallScreen;
