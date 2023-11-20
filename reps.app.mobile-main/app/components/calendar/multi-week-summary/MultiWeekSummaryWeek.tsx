import React, { FC, PropsWithChildren } from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Box, HStack, Text } from 'native-base';

import { WorkoutSummaryDayValues } from 'models/training.model';

interface Props {
  data: Array<WorkoutSummaryDayValues>;
  index: number;
}

interface DayWrapperProps extends PropsWithChildren {
  isToday: boolean;
}

function selectFill(value: WorkoutSummaryDayValues): JSX.Element {
  if (value.status === 'Empty') {
    return <></>;
  }

  if (value.status === 'Complete') {
    return <FontAwesomeIcon icon={faCircleCheck} size={36} color={'white'} />;
  }

  if (value.status === 'Skipped') {
    return (
      <Box
        bg={value.isToday ? 'primary.600' : null}
        w={36}
        h={36}
        borderRadius={18}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text fontSize={11} color={'#D9D9D9'} opacity={'0.5'}>
          {'\u2B24'}
        </Text>
      </Box>
    );
  }

  return <></>;
}

const DayWrapper: FC<DayWrapperProps> = ({
  children,
  isToday,
}): JSX.Element => {
  return (
    <Box
      bg={isToday ? 'black' : null}
      w={50}
      h={50}
      borderRadius={25}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {children}
    </Box>
  );
};

const MultiWeekSummaryWeek: FC<Props> = ({ data, index }): JSX.Element => {
  return (
    <HStack justifyContent={'space-between'} mt={4} key={index}>
      {data.map((day, dayIndex) => {
        return (
          <DayWrapper isToday={day.isToday} key={dayIndex}>
            {selectFill(day)}
          </DayWrapper>
        );
      })}
    </HStack>
  );
};

export default MultiWeekSummaryWeek;
