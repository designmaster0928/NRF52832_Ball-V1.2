import React, { FC } from 'react';
import { Heading, HStack, Text, VStack } from 'native-base';

import MonthDayStamp from 'components/date/MonthDayStamp';

interface Props {
  day: string;
  duration: string;
  month: string;
  subtitle: string;
  title: string;
}

const WorkoutSummaryActivityDateHeader: FC<Props> = ({
  day,
  duration,
  month,
  subtitle,
  title,
}): JSX.Element => {
  return (
    <HStack alignItems={'center'}>
      <MonthDayStamp day={day} month={month} />
      <VStack ml={4}>
        <Heading fontWeight={700} fontSize={20} lineHeight={22}>
          {title}{' '}
          <Text
            color={'white:alpha.70'}
            fontSize={16}
            fontWeight={700}
            lineHeight={22}
          >
            {subtitle}
          </Text>
        </Heading>
        <Text fontWeight={400} fontSize={16}>
          {duration}
        </Text>
      </VStack>
    </HStack>
  );
};

export default WorkoutSummaryActivityDateHeader;
