import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Icon } from 'native-base';

import { tabBarButtonIconHelper } from 'helpers/tab-bar-button-icon.helper';

interface Props {
  focused: boolean;
  color: string;
  routeName: string;
  size: number;
}

export function TabBarButtonIcon(props: Props): JSX.Element {
  const { color, routeName } = props;
  return (
    <Icon
      as={
        <FontAwesomeIcon
          icon={tabBarButtonIconHelper(routeName)}
          color={color}
          size={26}
        />
      }
      color="white"
      size="sm"
    />
  );
}
