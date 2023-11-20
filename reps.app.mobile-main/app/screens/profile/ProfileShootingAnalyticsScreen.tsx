import React, { FC } from 'react';
import { Flex, ScrollView } from 'native-base';

import AnalyticsAverageSpeed from 'components/analytics/AnalyticsAverageSpeed';
import AnalyticsFreestyleShots from 'components/analytics/AnalyticsFreestyleShots';
import AnalyticsWallballReps from 'components/analytics/AnalyticsWallballReps';
import { MainHeader } from 'components/headers/MainHeader';

const ProfileShootingAnalyticsScreen: FC = () => {
  return (
    <Flex flex={1}>
      <MainHeader title={'Training Analytics'} canGoBack={true} />
      <ScrollView>
        <AnalyticsAverageSpeed />
        <AnalyticsFreestyleShots />
        <AnalyticsWallballReps />
      </ScrollView>
    </Flex>
  );
};

export default ProfileShootingAnalyticsScreen;
