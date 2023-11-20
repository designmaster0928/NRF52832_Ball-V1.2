/* eslint-disable @typescript-eslint/no-require-imports */
import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { Box, HStack } from 'native-base';

import { StatDisplay } from 'components/text/StatDisplay';

import Speedometer from './Speedometer';

const { width } = Dimensions.get('window');

interface Props {
  speedMph: number;
  maxAcceleration: number;
  duration: number;
  timeOfFlight: number;
}

const SpeedometerWithStats: FC<Props> = ({
  speedMph,
  maxAcceleration,
  duration,
  timeOfFlight,
}): JSX.Element => {
  return (
    <>
      <Box w={width - 40} alignSelf={'center'}>
        <Box position={'absolute'}>
          <StatDisplay
            fontSize={48}
            precision={2}
            stat={speedMph}
            title={'Speed Mph'}
          />
        </Box>
        <Box position={'absolute'} right={0}>
          <StatDisplay
            fontSize={48}
            precision={2}
            stat={timeOfFlight}
            title={'Time of Flight'}
          />
        </Box>
        <Box mt={'62px'}>
          <Speedometer
            needleImage={require('../../assets/misc/speedometer-needle-w.png')}
            size={width - 80}
            topValue={50}
            value={speedMph}
          />
        </Box>

        <HStack justifyContent={'space-between'} alignItems={'flex-end'} mt={4}>
          <StatDisplay
            fontSize={48}
            precision={2}
            stat={maxAcceleration}
            title={'Acceleration'}
          />
          <StatDisplay
            fontSize={48}
            precision={2}
            stat={duration}
            title={'Duration'}
          />
        </HStack>
      </Box>
    </>
  );
};

export default SpeedometerWithStats;
