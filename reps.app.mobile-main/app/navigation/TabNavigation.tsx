import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { TabBarButton } from 'components/TabBarButton';
import { TabBarButtonIcon } from 'components/TabBarButtonIcon';
import { TabNavigation as TabNavigationEnum } from 'enums/navigation.enum';
import { TrainingFreestyleScreen } from 'screens/training/TrainingFreestyleScreen';
import { theme } from 'themes/default.theme';

import HomeStackNavigation from './HomeStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
import TrainingStackNavigation from './TrainingStackNavigation';

const Tab = createBottomTabNavigator();

export function TabNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary['400'],
        tabBarButton: (props) => (
          <TabBarButton {...props} routeName={route.name} />
        ),
        tabBarIcon: (props) => (
          <TabBarButtonIcon {...props} routeName={route.name} />
        ),

        tabBarIconStyle: styles.tabBarIcon,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name={TabNavigationEnum.TabHome}
        component={HomeStackNavigation}
      />
      <Tab.Screen
        name={TabNavigationEnum.TabTraining}
        component={TrainingStackNavigation}
      />
      <Tab.Screen
        name={TabNavigationEnum.TabProfile}
        component={ProfileStackNavigation}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.backgroundGray['400'],
    borderTopColor:
      Platform.OS === 'ios'
        ? theme.colors.backgroundGray['600']
        : theme.colors.black,
    borderTopWidth: 1,
    height: 78,
    shadowColor: theme.colors.backgroundGray['700'],
    shadowOffset: { height: -6, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  tabBarIcon: {},
  tabBarItem: {
    alignSelf: 'center',
  },
  tabBarLabel: {},
});
