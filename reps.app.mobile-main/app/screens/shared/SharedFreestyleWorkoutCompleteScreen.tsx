/* eslint-disable max-lines-per-function */
import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  VStack,
} from 'native-base';

import WorkoutSummaryActivityItem from 'components/activity/WorkoutSummaryActivityItem';
import MultiWeekSummary from 'components/calendar/multi-week-summary/MultiWeekSummary';
import { MainHeader } from 'components/headers/MainHeader';
import WorkoutSummaryPraise from 'components/workout-summary/WorkoutSummaryPraise';
import { TrainingNavigation } from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { useDailySessions } from '../../hooks/useDailySessions.hook';
import { useNumberOfRepsThisMonth } from '../../hooks/useNumberOfRepsThisMonth.hook';
import { useNumberOfThrowsThisMonth } from '../../hooks/useNumberOfThrowsThisMonth.hook';

const SharedFreestyleWorkoutCompleteScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();
  const dailySessions = useDailySessions();
  const monthlyThrows = useNumberOfThrowsThisMonth();
  const monthlyReps = useNumberOfRepsThisMonth();
  const route = useRoute<any>();

  const typeSpecificVerbiage = useMemo(() => {
    const type: WorkoutFreestyleTypes = route.params.type;

    if (type === WorkoutFreestyleTypes.WallBall) {
      return {
        title: 'Wall Ball Freestyle',
      };
    }

    return {
      title: 'Shooting Freestyle',
    };
  }, [route.params.type]);

  const monthlyRecordedTitle = useMemo(() => {
    if (route.params.type === WorkoutFreestyleTypes.WallBall) {
      return `${monthlyReps} rep${
        monthlyThrows > 1 ? 's' : ''
      } recorded this month`;
    }

    if (route.params.type === WorkoutFreestyleTypes.Shooting) {
      return `${monthlyThrows} shot${
        monthlyThrows > 1 ? 's' : ''
      } recorded this month`;
    }

    return '';
  }, [monthlyReps, monthlyThrows]);

  return (
    <Box flex={1}>
      <Box
        bg={'primary.400'}
        bottom={'40%'}
        left={0}
        position={'absolute'}
        right={0}
        top={0}
      />
      <MainHeader title={typeSpecificVerbiage?.title} canGoBack={true} />

      <ScrollView contentContainerStyle={styles.scrollViewContainer} w={'100%'}>
        <VStack px={4} bg={'primary.400'}>
          <HStack alignItems={'center'} pt={2}>
            <Heading fontSize={18} fontWeight={700}>
              {'Workout Complete'.toLocaleUpperCase()}
            </Heading>
            <Flex flex={1}>
              <IconButton
                alignSelf={'flex-end'}
                onPress={(): void => console.log('ADD SHARE')}
                icon={
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    style={styles.shareButton}
                    size={18}
                  />
                }
                _pressed={{ bg: 'primary.600' }}
              />
            </Flex>
          </HStack>

          <MultiWeekSummary data={dailySessions} />
        </VStack>
        <VStack px={'40px'} bg={'backgroundGray.400'}>
          <WorkoutSummaryPraise dailySessions={dailySessions} />
          <WorkoutSummaryActivityItem
            icon={faBomb}
            iconColor={'#839CF8'}
            title={monthlyRecordedTitle}
          />

          <Button
            bg={'secondary.400'}
            onPress={(): void => {
              navigation.navigate(
                TrainingNavigation.TrainingFreestyleWorkoutSummaryScreen,
                { ...route.params, sessionId: route.params.sessionId },
              );
            }}
            mt={8}
            mb={8}
            _text={{
              color: 'textVisibleSecondary.400',
              fontSize: 16,
              fontWeight: 700,
            }}
            _pressed={{
              bg: 'secondary.600',
            }}
          >
            Go to Workout Summary
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {},
  shareButton: {
    color: 'white',
  },
});

export default SharedFreestyleWorkoutCompleteScreen;
