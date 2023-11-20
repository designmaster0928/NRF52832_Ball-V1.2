import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Center } from 'native-base';

interface Props extends BottomTabBarButtonProps {
  routeName: string;
}

export function TabBarButton(props: Props): JSX.Element {
  return (
    <TouchableOpacity {...props}>
      <Center
        _android={{ height: 50, marginBottom: 4 }}
        _ios={{ height: 50, marginBottom: -2 }}
      >
        {props.children}
      </Center>
    </TouchableOpacity>
  );
}
