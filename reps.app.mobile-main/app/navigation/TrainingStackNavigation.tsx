import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TrainingNavigation } from 'enums/navigation.enum';
import { TrainingStackParamList } from 'models/navigation.model';
import SharedFreestyleWorkoutCompleteScreen from 'screens/shared/SharedFreestyleWorkoutCompleteScreen';
import SharedFreestyleWorkoutSummaryScreen from 'screens/shared/SharedFreestyleWorkoutSummaryScreen';
import SharedProgrammedWorkoutCompleteScreen from 'screens/shared/SharedProgrammedWorkoutCompleteScreen';
import SharedProgrammedWorkoutSummaryScreen from 'screens/shared/SharedProgrammedWorkoutSummaryScreen';
import { TrainingFreestyleScreen } from 'screens/training/TrainingFreestyleScreen';
import TrainingPreLobbyScreen from 'screens/training/TrainingPreLobbyScreen';
import TrainingReferenceLibraryItemScreen from 'screens/training/TrainingReferenceLibraryItemScreen';
import TrainingReferenceLibraryScreen from 'screens/training/TrainingReferenceLibraryScreen';
import TrainingScreen from 'screens/training/TrainingScreen';
import TrainingStrengthItemScreen from 'screens/training/TrainingStrengthItemScreen';
import TrainingStrengthScreen from 'screens/training/TrainingStrengthScreen';
import TrainingWallBallScreen from 'screens/training/TrainingWallBall';

const Stack = createNativeStackNavigator<TrainingStackParamList>();

const TrainingStackNavigation: FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={TrainingNavigation.TrainingFreestyleScreen}
      >
        <Stack.Screen
          name={TrainingNavigation.TrainingFreestyleScreen}
          component={TrainingFreestyleScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingFreestyleWorkoutCompleteScreen}
          component={SharedFreestyleWorkoutCompleteScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingFreestyleWorkoutSummaryScreen}
          component={SharedFreestyleWorkoutSummaryScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingPreLobbyScreen}
          component={TrainingPreLobbyScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingProgrammedWorkoutCompleteScreen}
          component={SharedProgrammedWorkoutCompleteScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingProgrammedWorkoutSummaryScreen}
          component={SharedProgrammedWorkoutSummaryScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingReferenceLibraryItemScreen}
          component={TrainingReferenceLibraryItemScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingReferenceLibraryScreen}
          component={TrainingReferenceLibraryScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingScreen}
          component={TrainingScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingStrengthScreen}
          component={TrainingStrengthScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingStrengthItemScreen}
          component={TrainingStrengthItemScreen}
        />
        <Stack.Screen
          name={TrainingNavigation.TrainingWallBallScreen}
          component={TrainingWallBallScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default TrainingStackNavigation;
