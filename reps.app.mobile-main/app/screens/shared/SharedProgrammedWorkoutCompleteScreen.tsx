import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

import WorkoutSummaryActivityItem from 'components/activity/WorkoutSummaryActivityItem';
import MultiWeekSummary from 'components/calendar/multi-week-summary/MultiWeekSummary';
import HashedSelector from 'components/forms/HashedSelector';
import { MainHeader } from 'components/headers/MainHeader';
import { TrainingNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { data as workoutSummaryData } from '../../mocks/training-freestyle-workout-summary.mock';

const SharedProgrammedWorkoutCompleteScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Box flex={1}>
      <MainHeader title={'Daily Tune Up'} canGoBack={true} />
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

        <MultiWeekSummary data={workoutSummaryData} />
      </VStack>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Center mt={6} mb={2}>
          <Text fontWeight={400} fontSize={16} lineHeight={22}>
            How hard was this workout?
          </Text>
        </Center>
        <HashedSelector values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <HStack justifyContent={'space-between'} mt={2}>
          <Text fontWeight={300} fontSize={12} lineHeight={16}>
            Easy
          </Text>
          <Text fontWeight={300} fontSize={12} lineHeight={16}>
            Moderate
          </Text>
          <Text fontWeight={300} fontSize={12} lineHeight={16}>
            Hard
          </Text>
        </HStack>
        <WorkoutSummaryActivityItem
          icon={faDumbbell}
          iconColor={'#8FFFA8'}
          title={'Great job! That’s 15 workouts this month!'}
        />
        <WorkoutSummaryActivityItem
          icon={faBomb}
          iconColor={'#839CF8'}
          title={'152 shots recorded'}
        />

        <Button
          bg={'secondary.400'}
          onPress={(): void => {
            navigation.navigate(
              TrainingNavigation.TrainingProgrammedWorkoutSummaryScreen,
            );
          }}
          mt={8}
          mx={4}
          _text={{
            fontSize: 16,
            fontWeight: 700,
          }}
          _pressed={{
            bg: 'secondary.600',
          }}
        >
          Go to Workout Summary
        </Button>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: { paddingBottom: 40, paddingHorizontal: 40 },
  shareButton: {
    color: 'white',
  },
});

export default SharedProgrammedWorkoutCompleteScreen;
