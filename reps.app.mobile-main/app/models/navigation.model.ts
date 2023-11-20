import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  ProfileNavigation,
  RootNavigation,
  TabNavigation,
  TrainingNavigation,
} from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';

export type NavigationEnums =
  | ProfileNavigation
  | RootNavigation
  | TabNavigation
  | TrainingNavigation;

export type StackNavigationProp = NativeStackNavigationProp<any>;

export type ProfileStackNavigationProp =
  NativeStackNavigationProp<ProfileStackParamList>;

export type ProfileStackParamList = {
  [ProfileNavigation.ProfileAccountSettingsScreen]: undefined;
  [ProfileNavigation.ProfileAddTeammateScreen]: undefined;
  [ProfileNavigation.ProfileAppSettingsScreen]: undefined;
  [ProfileNavigation.ProfilePersonalScreen]: undefined;
  [ProfileNavigation.ProfileScreen]: undefined;
  [ProfileNavigation.ProfileShootingAnalyticsScreen]: undefined;
  [ProfileNavigation.ProfileTeammateProfileScreen]: undefined;
  [ProfileNavigation.ProfileTeammatesScreen]: undefined;
  [ProfileNavigation.ProfileWorkoutHistoryScreen]: undefined;
};

export type TrainingStackNavigationProp =
  NativeStackNavigationProp<TrainingStackParamList>;

export type TrainingStackParamList = {
  [TrainingNavigation.TrainingFreestyleScreen]: undefined;
  [TrainingNavigation.TrainingFreestyleShootingLogScreen]: undefined;
  [TrainingNavigation.TrainingFreestyleShootingScreen]: undefined;
  [TrainingNavigation.TrainingFreestyleWallBallScreen]: undefined;
  [TrainingNavigation.TrainingFreestyleWorkoutCompleteScreen]: undefined;
  [TrainingNavigation.TrainingFreestyleWorkoutSummaryScreen]: {
    type: WorkoutFreestyleTypes;
  };
  [TrainingNavigation.TrainingPreLobbyScreen]: undefined;
  [TrainingNavigation.TrainingProgrammedShootingScreen]: undefined;
  [TrainingNavigation.TrainingProgrammedWorkoutCompleteScreen]: undefined;
  [TrainingNavigation.TrainingProgrammedWorkoutSummaryScreen]: undefined;
  [TrainingNavigation.TrainingReferenceLibraryItemScreen]: undefined;
  [TrainingNavigation.TrainingReferenceLibraryScreen]: undefined;
  [TrainingNavigation.TrainingScreen]: undefined;
  [TrainingNavigation.TrainingStrengthItemScreen]: undefined;
  [TrainingNavigation.TrainingStrengthScreen]: undefined;
  [TrainingNavigation.TrainingWallBallScreen]: undefined;
};
