import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, useTheme } from 'native-base';

import { RootNavigation, TrainingNavigation } from 'enums/navigation.enum';
import BallConnectionManagementScreen from 'screens/shared/SharedBallConnectionManagementScreen';
import SharedBallStatScreen from 'screens/shared/SharedBallStatScreen';
import { TrainingFreestyleShootingLogScreen } from 'screens/training/TrainingFreestyleShootingLogScreen';
import { TrainingFreestyleShootingScreen } from 'screens/training/TrainingFreestyleShootingScreen';
import TrainingFreestyleWallBallScreen from 'screens/training/TrainingFreestyleWallBallScreen';
import TrainingProgrammedShootingScreen from 'screens/training/TrainingProgrammedShootingScreen';

/*
 * Import AuthForgotPasswordCodeScreen from 'screens/auth/AuthForgotPasswordCodeScreen';
 * import AuthForgotPasswordScreen from 'screens/auth/AuthForgotPasswordScreen';
 * import AuthLandingScreen from 'screens/auth/AuthLandingScreen';
 * import AuthLoginScreen from 'screens/auth/AuthLoginScreen';
 * import AuthResetPasswordScreen from 'screens/auth/AuthResetPasswordScreen';
 * import AuthSignUpEmailScreen from 'screens/auth/AuthSignUpEmailScreen';
 * import AuthSignUpPasswordScreen from 'screens/auth/AuthSignUpPasswordScreen';
 */
import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line max-lines-per-function
export function RootStackNavigation(): JSX.Element {
  const nativeBaseTheme = useTheme();

  // Const [domainContext] = useDomainContext();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: nativeBaseTheme.colors.backgroundGray[400],
    },
  };

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <>
            <Stack.Group>
              <Stack.Screen
                name={RootNavigation.TabNavigation}
                component={TabNavigation}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                headerShown: false,
                presentation: 'transparentModal',
              }}
            >
              <Stack.Screen
                name={RootNavigation.SharedBallStatScreen}
                component={SharedBallStatScreen}
              />

              <Stack.Screen
                name={RootNavigation.SharedBallConnectionManagementScreen}
                component={BallConnectionManagementScreen}
                options={{
                  animation: 'none',
                  gestureDirection: 'vertical',
                  gestureEnabled: true,
                }}
              />
            </Stack.Group>

            <Stack.Group
              screenOptions={{
                animation: 'slide_from_bottom',
                headerShown: false,
              }}
            >
              <Stack.Screen
                name={TrainingNavigation.TrainingFreestyleShootingLogScreen}
                component={TrainingFreestyleShootingLogScreen}
              />
              <Stack.Screen
                name={TrainingNavigation.TrainingFreestyleShootingScreen}
                component={TrainingFreestyleShootingScreen}
              />
              <Stack.Screen
                name={TrainingNavigation.TrainingFreestyleWallBallScreen}
                component={TrainingFreestyleWallBallScreen}
              />
              <Stack.Screen
                name={TrainingNavigation.TrainingProgrammedShootingScreen}
                component={TrainingProgrammedShootingScreen}
              />
            </Stack.Group>
          </>

          {/* <Stack.Group>
          // Non-Amplify Auth Screens
          <Stack.Screen
            name={RootNavigation.AuthLandingScreen}
            component={AuthLandingScreen}
          />

          <Stack.Screen
            name={RootNavigation.AuthForgotPasswordCodeScreen}
            component={AuthForgotPasswordCodeScreen}
          />
          <Stack.Screen
            name={RootNavigation.AuthForgotPasswordScreen}
            component={AuthForgotPasswordScreen}
          />
          <Stack.Screen
            name={RootNavigation.AuthLoginScreen}
            component={AuthLoginScreen}
          />
          <Stack.Screen
            name={RootNavigation.AuthResetPasswordScreen}
            component={AuthResetPasswordScreen}
          />
          <Stack.Screen
            name={RootNavigation.AuthSignUpEmailScreen}
            component={AuthSignUpEmailScreen}
          />
          <Stack.Screen
            name={RootNavigation.AuthSignUpPasswordScreen}
            component={AuthSignUpPasswordScreen}
          />
        </Stack.Group> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Box
        position={'absolute'}
        w={100}
        h={100}
        top={0}
        left={0}
        bg={'red.400'}
      ></Box> */}
    </>
  );
}
