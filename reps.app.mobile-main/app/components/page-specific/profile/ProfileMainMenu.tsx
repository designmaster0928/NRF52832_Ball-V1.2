import React, { FC } from 'react';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';
import { faFutbol } from '@fortawesome/free-solid-svg-icons/faFutbol';
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';

import MenuList from 'components/lists/MenuList';
import { ProfileNavigation } from 'enums/navigation.enum';

const ProfileMainMenu: FC = (): JSX.Element => {
  return (
    <MenuList
      items={[
        {
          icon: faPerson,
          navigationName: ProfileNavigation.ProfilePersonalScreen,
          title: 'Personal',
        },
        // {
        //   icon: faPerson,
        //   navigationName: ProfileNavigation.ProfileTeammatesScreen,
        //   title: 'Friends',
        // },
        // {
        //   icon: faTrophy,
        //   title: 'Achievements',
        // },
        {
          icon: faChartSimple,
          navigationName: ProfileNavigation.ProfileShootingAnalyticsScreen,
          title: 'Training Analytics',
        },
        {
          icon: faDumbbell,
          navigationName: ProfileNavigation.ProfileWorkoutHistoryScreen,
          title: 'Workout History',
        },
        {
          icon: faFutbol,
          navigationName: ProfileNavigation.ProfileFindMyBallScreen,
          title: 'Find My Ball',
        },
      ]}
      containerProps={{ mt: 6 }}
    />
  );
};

export default ProfileMainMenu;
