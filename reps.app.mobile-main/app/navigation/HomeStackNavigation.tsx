import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TempHomeScreen from 'screens/home/TempHomeScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={TempHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
