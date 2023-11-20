import React from 'react';
import { Heading, HStack } from 'native-base';

interface Props {
  secondaryTitle?: string;
  title: string;
}

export function TwoToneHeader({ secondaryTitle, title }: Props): JSX.Element {
  return (
    <HStack alignItems={'center'}>
      <Heading fontSize={20} fontWeight={700} lineHeight={27} color={'white'}>
        {title}
      </Heading>
      <Heading
        fontSize={16}
        fontWeight={700}
        lineHeight={21}
        pl={2}
        color={'white:alpha.70'}
      >
        {secondaryTitle}
      </Heading>
    </HStack>
  );
}
