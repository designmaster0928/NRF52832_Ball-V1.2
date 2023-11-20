/* eslint-disable max-lines-per-function */
import React, { FC } from 'react';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons/faBoltLightning';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faGauge } from '@fortawesome/free-solid-svg-icons/faGauge';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { Button, Flex, HStack, Text, VStack } from 'native-base';

import WorkoutSummaryActivityDateHeader from 'components/activity/WorkoutSummaryActivityDateHeader';
import WorkoutSummaryVerticalActivityItem from 'components/activity/WorkoutSummaryVerticalActivityItem';
import ButtonSecondary from 'components/buttons/ButtonSecondary';
import { MainHeader } from 'components/headers/MainHeader';
import { ProfileNavigation, TabNavigation } from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { convertMillisecondsToFormattedTime } from 'helpers/time.helper';
import { StackNavigationProp } from 'models/navigation.model';

import { useAllTimeReps } from '../../hooks/useAllTimeReps.hook';
import { useStoredBallSession } from '../../hooks/useStoredBallSession.hook';

const SharedFreestyleWorkoutSummaryScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();
  const route = useRoute<any>();
  const {
    params: { hideNavButtons, sessionId, type },
  } = route || { params: {} };

  const allTimeReps = useAllTimeReps();
  const session = useStoredBallSession(sessionId);

  const dateTime = session.dateTime ? new Date(session.dateTime) : new Date();

  return (
    <Flex flex={1}>
      <MainHeader title={'Workout Summary'} canGoBack={true} />
      <VStack px={6} py={4}>
        {type === WorkoutFreestyleTypes.Shooting ? (
          <>
            <WorkoutSummaryActivityDateHeader
              day={format(dateTime, 'dd')}
              duration={convertMillisecondsToFormattedTime(
                (session.sessionTime || 0) * 1000,
              )}
              month={format(dateTime, 'MMM')}
              subtitle={'Freestyle'}
              title={'Shooting'}
            />
            <HStack justifyContent={'space-between'}>
              <WorkoutSummaryVerticalActivityItem
                icon={faBomb}
                iconColor={'#839CF8'}
                stat={String(session.reps || 0)}
                title={'Shots'}
              />
              <WorkoutSummaryVerticalActivityItem
                icon={faGauge}
                iconColor={'#FFA14A'}
                stat={(session.averageSpeed || 0).toFixed(0)}
                statUnit={'mph'}
                title={'Average Speed'}
              />
              <WorkoutSummaryVerticalActivityItem
                icon={faBoltLightning}
                iconColor={'#F1D900'}
                stat={String((session.topSpeed || 0).toFixed(0))}
                statUnit={'mph'}
                title={'Top Speed'}
              />
            </HStack>
          </>
        ) : (
          <>
            <WorkoutSummaryActivityDateHeader
              day={format(dateTime, 'dd')}
              duration={convertMillisecondsToFormattedTime(
                (session.sessionTime || 0) * 1000,
              )}
              month={format(dateTime, 'MMM')}
              subtitle={'Freestyle'}
              title={'Wall Ball'}
            />
            <HStack justifyContent={'space-between'}>
              <WorkoutSummaryVerticalActivityItem
                icon={faStar}
                iconColor={'#C091FE'}
                stat={String(session.reps || 0)}
                title={'Wall Ball Reps'}
              />
              <WorkoutSummaryVerticalActivityItem
                icon={faStar}
                iconColor={'#9747FF'}
                stat={String(allTimeReps || 0)}
                title={'Lifetime Wall Ball Reps'}
              />
            </HStack>
          </>
        )}
        {!hideNavButtons ? (
          <>
            <ButtonSecondary
              buttonProps={{ mt: 8 }}
              onPress={(): void => {
                navigation.popToTop();

                navigation.navigate(TabNavigation.TabProfile, {
                  state: {
                    index: 1, // Pointing to the second route in the routes array
                    routes: [
                      { name: ProfileNavigation.ProfileScreen },
                      { name: ProfileNavigation.ProfileWorkoutHistoryScreen },
                    ],
                  },
                });
              }}
              title={'Go to workout history'}
            />

            <Button
              colorScheme={'secondary'}
              mt={4}
              size={'lg'}
              variant="outline"
              onPress={(): void => {
                navigation.popToTop();
              }}
            >
              Home
            </Button>
          </>
        ) : (
          <></>
        )}
      </VStack>
    </Flex>
  );
};

export default SharedFreestyleWorkoutSummaryScreen;
