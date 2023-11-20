import React, { FC } from 'react';
import { HStack, Text } from 'native-base';

const abbreviations = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const WeeklyHeader: FC = (): JSX.Element => {
  return (
    <HStack justifyContent={'space-between'} mt={3}>
      {abbreviations.map((abbreviation, index) => {
        return (
          <Text
            fontWeight={700}
            fontSize={20}
            textAlign={'center'}
            w={36}
            key={index}
          >
            {abbreviation}
          </Text>
        );
      })}
    </HStack>
  );
};

export default WeeklyHeader;
