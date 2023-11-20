import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HStack, Text } from 'native-base';

interface Props {
  icon: IconProp;
  iconColor?: string;
  title: string;
}

const WorkoutSummaryActivityItem: FC<Props> = ({
  icon,
  iconColor,
  title,
}): JSX.Element => {
  return (
    <HStack alignItems={'center'} mt={6} w={'100%'}>
      <FontAwesomeIcon icon={icon} color={iconColor || 'white'} size={48} />
      <Text fontWeight={400} fontSize={16} lineHeight={22} ml={6} flex={1}>
        {title}
      </Text>
    </HStack>
  );
};

export default WorkoutSummaryActivityItem;
