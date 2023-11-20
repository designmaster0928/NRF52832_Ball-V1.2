import React, { FC } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, HStack, VStack } from 'native-base';

import WorkoutSummaryActivityDateHeader from 'components/activity/WorkoutSummaryActivityDateHeader';
import WorkoutSummaryVerticalActivityItem from 'components/activity/WorkoutSummaryVerticalActivityItem';
import ButtonSecondary from 'components/buttons/ButtonSecondary';
import { MainHeader } from 'components/headers/MainHeader';
import { ProfileNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

const SharedProgrammedWorkoutSummaryScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Flex flex={1}>
      <MainHeader title={'Workout Summary'} canGoBack={true} />
      <VStack px={6} py={4}>
        <>
          <WorkoutSummaryActivityDateHeader
            day={'08'}
            duration={'08:18:32'}
            month={'JUL'}
            subtitle={'Daily Tune Up'}
            title={'Wall Ball'}
          />
          <HStack justifyContent={'space-between'}>
            <WorkoutSummaryVerticalActivityItem
              icon={faStar}
              iconColor={'#C091FE'}
              stat={'42'}
              title={'Wall Ball Reps'}
            />
            <WorkoutSummaryVerticalActivityItem
              icon={faStar}
              iconColor={'#9747FF'}
              stat={'2576'}
              title={'Lifetime Wall Ball Reps'}
            />
          </HStack>
        </>

        <ButtonSecondary
          onPress={(): void => {
            navigation.popToTop();
            navigation
              .getParent()
              ?.navigate(ProfileNavigation.ProfileWorkoutHistoryScreen);
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
      </VStack>
    </Flex>
  );
};

export default SharedProgrammedWorkoutSummaryScreen;
