import React, { FC } from 'react';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons/faBoltLightning';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faGauge } from '@fortawesome/free-solid-svg-icons/faGauge';
import { Center, Flex, Heading, HStack } from 'native-base';

import WorkoutSummaryVerticalActivityItem from 'components/activity/WorkoutSummaryVerticalActivityItem';
import { MainHeader } from 'components/headers/MainHeader';
import ProfileHeader from 'components/headers/ProfileHeader';
import HistoryList from 'components/lists/HistoryList';

import { data } from '../../mocks/profile-workout-history.mock';

const ProfileTeammateProfileScreen: FC = () => {
  return (
    <Flex flex={1}>
      <MainHeader title={'Friend'} canGoBack={true} />
      <HistoryList
        data={data}
        ListHeaderComponent={
          <>
            <ProfileHeader name={'John Smith'} key={'profile-header'} />

            <HStack
              justifyContent={'space-between'}
              key={'profile-activity-items'}
            >
              <WorkoutSummaryVerticalActivityItem
                icon={faBomb}
                iconColor={'#839CF8'}
                stat={'3'}
                title={'Avg. Weekly\nWorkout'}
                key={'profile-activity-items-1'}
              />
              <WorkoutSummaryVerticalActivityItem
                icon={faGauge}
                iconColor={'#FFA14A'}
                stat={'76'}
                statUnit={'mph'}
                title={'Fastest Shot'}
                key={'profile-activity-items-2'}
              />
              <WorkoutSummaryVerticalActivityItem
                icon={faBoltLightning}
                iconColor={'#F1D900'}
                stat={'2576'}
                title={'Lifetime Wall\nBall Reps'}
                key={'profile-activity-items-3'}
              />
            </HStack>

            <Center mt={12} mb={-4} key={'profile-list-header'}>
              <Heading fontSize={16} fontWeight={400} lineHeight={22}>
                Recent Workouts
              </Heading>
            </Center>
          </>
        }
      />
    </Flex>
  );
};

export default ProfileTeammateProfileScreen;
