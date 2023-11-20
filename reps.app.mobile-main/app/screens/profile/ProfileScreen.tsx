import React, { FC } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons/faBoltLightning';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faGauge } from '@fortawesome/free-solid-svg-icons/faGauge';
import { useIsFocused } from '@react-navigation/native';
import { Divider, Flex, HStack, ScrollView } from 'native-base';

import WorkoutSummaryVerticalActivityItem from 'components/activity/WorkoutSummaryVerticalActivityItem';
import { MainHeader } from 'components/headers/MainHeader';
import ProfileHeader from 'components/headers/ProfileHeader';
import MenuList from 'components/lists/MenuList';
import ProfileMainMenu from 'components/page-specific/profile/ProfileMainMenu';
import { ProfileNavigation } from 'enums/navigation.enum';

import { useAllTimeReps } from '../../hooks/useAllTimeReps.hook';
import { useAverageWeeklySessions } from '../../hooks/useAverageWeeklySessions.hook';
import { useFastestThrow } from '../../hooks/useFastestThrow.hook';
import { useUser } from '../../hooks/useUser.hook';

const ProfileScreen: FC = () => {
  const { signOut } = useAuthenticator();

  const isFocused = useIsFocused();
  const [user] = useUser(isFocused);
  const allTimeReps = useAllTimeReps();
  const averageWeeklySessions = useAverageWeeklySessions();
  const fastestThrow = useFastestThrow();

  return (
    <Flex flex={1}>
      <MainHeader title={'Profile'} />
      <ScrollView p={4}>
        <ProfileHeader
          email={user.email}
          name={
            user.nickname
              ? `${user.nickname || ''}`
              : `${user.firstName || ''}${user.lastName || ''}`
          }
        />

        <HStack justifyContent={'space-between'}>
          <WorkoutSummaryVerticalActivityItem
            icon={faBomb}
            iconColor={'#839CF8'}
            stat={String(averageWeeklySessions)}
            title={'Avg. Weekly\nWorkout'}
          />
          <WorkoutSummaryVerticalActivityItem
            icon={faGauge}
            iconColor={'#FFA14A'}
            stat={fastestThrow.toFixed(0)}
            statUnit={'mph'}
            title={'Fastest Shot'}
          />
          <WorkoutSummaryVerticalActivityItem
            icon={faBoltLightning}
            iconColor={'#F1D900'}
            stat={String(allTimeReps)}
            title={'Lifetime Wall\nBall Reps'}
          />
        </HStack>
        <ProfileMainMenu />
        <Divider mt={6} />
        <MenuList
          items={[
            {
              navigationName: ProfileNavigation.ProfileAccountSettingsScreen,
              title: 'Account Settings',
            },
            /*
             * {
             *   navigationName: ProfileNavigation.ProfileAppSettingsScreen,
             *   title: 'App Settings',
             * },
             * {
             *   navigationName: ProfileNavigation.ProfileDeviceSettingsScreen,
             *   title: 'Equipment / Device Settings',
             * },
             */
            {
              onPress: (): void => {
                signOut();
              },
              title: 'Logout',
            },
          ]}
          containerProps={{ mb: 8, mt: 6 }}
        />
      </ScrollView>
    </Flex>
  );
};

export default ProfileScreen;
