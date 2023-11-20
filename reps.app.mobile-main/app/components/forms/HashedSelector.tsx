import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Circle, HStack, Slider } from 'native-base';

interface HashProps {
  selected: boolean;
  hidden?: boolean;
}

interface Props {
  values: Array<any>;
}

const Hash: FC<HashProps> = ({ hidden, selected }): JSX.Element => {
  return (
    <Circle
      size={selected ? '24px' : '8px'}
      bg={hidden ? 'transparent' : 'white'}
    />
  );
};

const HashedSelector: FC<Props> = ({ values }): JSX.Element => {
  const [selected, setSelected] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <Box>
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        position={'absolute'}
        top={'8px'}
        left={0}
        right={0}
      >
        {values.map((value: any, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              disabled={selected === index}
              onPress={(): void => {
                setSelected(index);
              }}
            >
              <Box
                h={'8px'}
                w={'8px'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Hash selected={false} />
              </Box>
            </TouchableOpacity>
          );
        })}
      </HStack>
      <Slider
        onChange={(value: number): void => {
          setSliderValue(value);
        }}
        value={sliderValue}
        step={10}
      >
        <Slider.Track bg={'white'}>
          <Slider.FilledTrack bg={'white'} />
        </Slider.Track>
        <Slider.Thumb size={'24px'} bg={'white'} />
      </Slider>
    </Box>
  );
};

export default HashedSelector;
