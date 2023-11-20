import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HStack, Text } from 'native-base';

import { useCurrentSessionStreak } from '../../hooks/useCurrentSessionStreak.hook';

interface Props {
  icon: IconProp;
  name?: string;
}

const StreakBadge: FC<Props> = ({ icon, name }): JSX.Element => {
  const currentStreak = useCurrentSessionStreak();

  return (
    <HStack
      alignItems={'center'}
      bg={'black'}
      borderRadius={4}
      p={2}
      width={'143px'}
      mt={2}
    >
      {currentStreak > 1 ? (
        <>
          <FontAwesomeIcon icon={icon} size={14} style={styles.redIcon} />
          <Text
            color={'white'}
            fontSize={12}
            fontWeight={700}
            lineHeight={16}
            ml={2}
          >
            {`${currentStreak} day${currentStreak > 1 ? 's' : ''} in a row`}
          </Text>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={icon} size={14} style={styles.grayIcon} />
          <Text
            color={'#797979'}
            fontSize={12}
            fontWeight={700}
            lineHeight={16}
            ml={2}
          >
            {'No Streak'}
          </Text>
        </>
      )}
    </HStack>
  );
};

const styles = StyleSheet.create({
  grayIcon: {
    color: '#797979',
  },
  redIcon: {
    color: '#FF4A4A',
  },
});

export default StreakBadge;
