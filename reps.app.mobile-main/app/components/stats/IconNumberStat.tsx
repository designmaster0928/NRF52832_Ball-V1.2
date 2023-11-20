import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Heading, HStack, IBoxProps, Text, VStack } from 'native-base';

interface Props {
  containerProps?: IBoxProps;
  icon: IconProp;
  stat: string;
  title: string;
}

const IconNumberStat: FC<Props> = ({
  containerProps,
  icon,
  stat,
  title,
}): JSX.Element => {
  return (
    <HStack justifyContent={'center'} alignItems={'center'} {...containerProps}>
      <FontAwesomeIcon icon={icon} color={'white'} size={20} />
      <VStack ml={4}>
        <Heading color={'white'} fontSize={12} fontWeight={600} lineHeight={16}>
          {title}
        </Heading>
        <Text color={'white'} fontSize={16} fontWeight={700} lineHeight={22}>
          {stat}
        </Text>
      </VStack>
    </HStack>
  );
};

export default IconNumberStat;
