/* eslint-disable @typescript-eslint/no-require-imports */
import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { Box, HStack } from 'native-base';

import { StatDisplay } from 'components/text/StatDisplay';

import Speedometer from './Speedometer';

const { width } = Dimensions.get('window');

interface Props {
  averageSpeed: number;
  lifetimeAverageSpeed: number;
  lifetimeTopSpeed: number;
  topSpeed: number;
}

const SpeedometerWithStats: FC<Props> = ({
  averageSpeed,
  lifetimeAverageSpeed,
  lifetimeTopSpeed,
  topSpeed,
}): JSX.Element => {
  return (
    <>
      <Box w={width - 40} alignSelf={'center'}>
        <Box position={'absolute'}>
          <StatDisplay
            title={'Avg. Speed'}
            stat={String(averageSpeed)}
            fontSize={48}
          />
        </Box>
        <Box position={'absolute'} right={0}>
          <StatDisplay
            title={'Top Speed'}
            stat={String(topSpeed)}
            fontSize={48}
          />
        </Box>
        <Box mt={'24px'}>
          <Speedometer
            value={averageSpeed}
            topValue={topSpeed}
            size={width - 80}
            needleImage={require('../../assets/misc/speedometer-needle-w.png')}
          />
        </Box>

        <HStack justifyContent={'space-between'} alignItems={'flex-end'}>
          <StatDisplay
            title={'Lifetime\nAvg. Speed'}
            stat={String(lifetimeAverageSpeed)}
            fontSize={48}
          />
          <StatDisplay
            title={'Lifetime\nTop Speed'}
            stat={String(lifetimeTopSpeed)}
            fontSize={48}
          />
        </HStack>
      </Box>
    </>
  );
};

export default SpeedometerWithStats;
