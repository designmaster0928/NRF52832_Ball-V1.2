import React, { FC } from 'react';
import { Box, Heading, Text, VStack } from 'native-base';

interface Props {
  day?: string;
  month?: string;
  isSmall?: boolean;
}

const MonthDayStamp: FC<Props> = ({ day, month, isSmall }): JSX.Element => {
  return (
    <Box bg={'secondary.400'} py={isSmall ? 2 : 4} w={isSmall ? 42 : 73}>
      <VStack justifyContent={'center'} alignItems={'center'}>
        <Heading
          color={'textVisibleSecondary.400'}
          fontWeight={700}
          fontSize={isSmall ? 24 : 32}
          mb={-2}
        >
          {day}
        </Heading>
        <Text
          color={'textVisibleSecondary.400'}
          fontWeight={400}
          fontSize={isSmall ? 12 : 16}
        >
          {month?.toLocaleUpperCase()}
        </Text>
      </VStack>
    </Box>
  );
};

export default MonthDayStamp;
