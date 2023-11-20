import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileNavigation } from 'enums/navigation.enum';
import ProfileAccountSettingsScreen from 'screens/profile/ProfileAccountSettingsScreen';
import ProfileAddTeammatesScreen from 'screens/profile/ProfileAddTeammateScreen';
import ProfileAppSettingsScreen from 'screens/profile/ProfileAppSettingsScreen';
import ProfileBluetoothDebuggerScreen from 'screens/profile/ProfileBluetoothDebuggerScreen';
import ProfileDeviceSettingsScreen from 'screens/profile/ProfileDeviceSettingsScreen';
import ProfileEditScreen from 'screens/profile/ProfileEditScreen';
import ProfileFindMyBallScreen from 'screens/profile/ProfileFindMyBallScreen';
import ProfilePersonalScreen from 'screens/profile/ProfilePersonalScreen';
import ProfileScreen from 'screens/profile/ProfileScreen';
import ProfileShootingAnalyticsScreen from 'screens/profile/ProfileShootingAnalyticsScreen';
import ProfileTeammateProfileScreen from 'screens/profile/ProfileTeammateProfileScreen';
import ProfileTeammatesScreen from 'screens/profile/ProfileTeammatesScreen';
import ProfileWorkoutHistoryScreen from 'screens/profile/ProfileWorkoutHistoryScreen';
import SharedFreestyleWorkoutCompleteScreen from 'screens/shared/SharedFreestyleWorkoutCompleteScreen';
import SharedFreestyleWorkoutSummaryScreen from 'screens/shared/SharedFreestyleWorkoutSummaryScreen';
import SharedProgrammedWorkoutCompleteScreen from 'screens/shared/SharedProgrammedWorkoutCompleteScreen';
import SharedProgrammedWorkoutSummaryScreen from 'screens/shared/SharedProgrammedWorkoutSummaryScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ProfileNavigation.ProfileScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ProfileNavigation.ProfileAccountSettingsScreen}
        component={ProfileAccountSettingsScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileAddTeammateScreen}
        component={ProfileAddTeammatesScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileAppSettingsScreen}
        component={ProfileAppSettingsScreen}
      />

      <Stack.Screen
        name={ProfileNavigation.ProfileBluetoothDebuggerScreen}
        component={ProfileBluetoothDebuggerScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileDeviceSettingsScreen}
        component={ProfileDeviceSettingsScreen}
      />

      <Stack.Screen
        name={ProfileNavigation.ProfileEditScreen}
        component={ProfileEditScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileFindMyBallScreen}
        component={ProfileFindMyBallScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileFreestyleWorkoutCompleteScreen}
        component={SharedFreestyleWorkoutCompleteScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileFreestyleWorkoutSummaryScreen}
        component={SharedFreestyleWorkoutSummaryScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfilePersonalScreen}
        component={ProfilePersonalScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileProgrammedWorkoutCompleteScreen}
        component={SharedProgrammedWorkoutCompleteScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileProgrammedWorkoutSummaryScreen}
        component={SharedProgrammedWorkoutSummaryScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileShootingAnalyticsScreen}
        component={ProfileShootingAnalyticsScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileTeammateProfileScreen}
        component={ProfileTeammateProfileScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileTeammatesScreen}
        component={ProfileTeammatesScreen}
      />
      <Stack.Screen
        name={ProfileNavigation.ProfileWorkoutHistoryScreen}
        component={ProfileWorkoutHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
