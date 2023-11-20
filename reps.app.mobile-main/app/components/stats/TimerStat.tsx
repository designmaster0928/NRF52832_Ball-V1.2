import React, { FC } from 'react';
import { Center, Heading } from 'native-base';

interface Props {
  time: string;
  fontSize?: number;
}

const TimerStat: FC<Props> = ({ fontSize, time }): JSX.Element => {
  return (
    <Center>
      <Heading fontWeight={'bold'} fontSize={fontSize} lineHeight={66}>
        {time}
      </Heading>
    </Center>
  );
};

export default TimerStat;
