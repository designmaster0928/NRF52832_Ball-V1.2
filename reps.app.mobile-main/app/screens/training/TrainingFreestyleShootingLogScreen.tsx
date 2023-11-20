import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ShotsTrackerDrawer } from 'components/drawers/ShotsTrackerDrawer';
import { handleRemoveUserStatSessionThrow } from 'helpers/session.helper';

import { useBallSessionFreestyleShots } from '../../hooks/useBallSessionFreestyleShots.hook';

export function TrainingFreestyleShootingLogScreen(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();

  const [, setForceRefresh] = useState(0);

  const [shotsData, , remove] = useBallSessionFreestyleShots(
    (route.params as { sessionId: string })?.sessionId,
  );

  return (
    <ShotsTrackerDrawer
      handleRemoveShot={(id: string): void => {
        handleRemoveUserStatSessionThrow(remove, id, shotsData);
        setForceRefresh((prevValue) => {
          return prevValue + 1;
        });
      }}
      isOpen={navigation.isFocused()}
      data={shotsData || []}
      handleDrawerClose={(): void => {
        navigation.goBack();
      }}
    />
  );
}
