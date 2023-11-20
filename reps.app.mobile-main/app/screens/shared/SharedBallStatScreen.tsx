/* eslint-disable @typescript-eslint/no-require-imports */
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Flex, Heading } from 'native-base';

import ButtonSecondary from 'components/buttons/ButtonSecondary';
import SpeedometerWithBallStats from 'components/speedometer/SpeedometerWithBallStats';

import { useBallStats } from '../../hooks/useBall';

const SharedBallStatScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const ballStats = useBallStats();

  return (
    <>
      <Flex flex={1} bg={'backgroundGray.400'} pt={50}>
        <Box mt={'120px'} />
        <SpeedometerWithBallStats
          speedMph={ballStats.speed || 0}
          maxAcceleration={ballStats.maxAcceleration || 0}
          duration={ballStats.duration || 0}
          timeOfFlight={ballStats.timeOfFlight || 0}
        />

        <Box mt={8}>
          <ButtonSecondary
            title={'Continue'}
            onPress={(): void => {
              navigation.goBack();
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default SharedBallStatScreen;
