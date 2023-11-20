import React, { FC } from 'react';
import { Heading, HStack, Slider, VStack } from 'native-base';

import { convertMillisecondsToFormattedTime } from 'helpers/time.helper';

interface Props {
  currentTimeSeconds: number;
  durationSeconds: number;
}

const PlayProgress: FC<Props> = ({
  currentTimeSeconds,
  durationSeconds,
}): JSX.Element => {
  const currentValue = (currentTimeSeconds / durationSeconds) * 100;

  return (
    <VStack>
      <HStack mb={2}>
        <Heading fontWeight={600} fontSize={32} lineHeight={43} flex={1}>
          {convertMillisecondsToFormattedTime(currentTimeSeconds * 1000)}
        </Heading>
        <Heading fontWeight={600} fontSize={32} lineHeight={43}>
          {convertMillisecondsToFormattedTime(durationSeconds * 1000)}
        </Heading>
      </HStack>
      <Slider defaultValue={0} value={currentValue} minValue={0}>
        <Slider.Track bg={'gray.300'}>
          <Slider.FilledTrack bg={'primary.400'} />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  );
};

export default PlayProgress;
