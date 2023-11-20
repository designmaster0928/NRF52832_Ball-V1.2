import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text, VStack } from 'native-base';

interface Props {
  icon: IconProp;
  iconColor?: string;
  stat?: string;
  statUnit?: string;
  title: string;
}

const WorkoutSummaryVerticalActivityItem: FC<Props> = ({
  icon,
  iconColor,
  stat,
  statUnit,
  title,
}): JSX.Element => {
  return (
    <VStack flex={1} alignItems={'center'} mt={6} justifyContent={'center'}>
      <FontAwesomeIcon icon={icon} color={iconColor || 'white'} size={24} />

      <Text
        fontWeight={700}
        fontSize={24}
        lineHeight={32}
        mt={1}
        textAlign={'center'}
        width={'100%'}
      >
        <>
          {Number(stat).toLocaleString()}
          {statUnit ? (
            <Text fontWeight={700} fontSize={12} lineHeight={32}>
              {' '}
              {statUnit}
            </Text>
          ) : (
            <></>
          )}
        </>
      </Text>

      <Text
        width={'100%'}
        fontWeight={400}
        fontSize={10}
        lineHeight={11}
        textAlign="center"
      >
        {title}
      </Text>
    </VStack>
  );
};

export default WorkoutSummaryVerticalActivityItem;
