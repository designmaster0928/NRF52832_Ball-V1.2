import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack } from 'native-base';

import { ProfileNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

export interface Props {
  icon?: IconProp;
  navigationName?: ProfileNavigation;
  onPress?: () => void;
  title: string;
}

const MenuListItem: FC<Props> = ({
  icon,
  navigationName,
  onPress,
  title,
}): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <TouchableOpacity
      onPress={(): void => {
        if (navigationName) {
          navigation.navigate(navigationName);
        }
        if (onPress) {
          onPress();
        }
      }}
    >
      <HStack alignItems={'center'} my={'13px'}>
        {icon && <FontAwesomeIcon icon={icon} size={24} style={styles.icon} />}
        <Heading
          fontSize={12}
          fontWeight={400}
          lineHeight={16}
          color={'white'}
          ml={6}
        >
          {title}
        </Heading>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
});

export default MenuListItem;
