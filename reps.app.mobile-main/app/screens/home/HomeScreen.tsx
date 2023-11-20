import React from 'react';
import { Box, Heading, ScrollView } from 'native-base';

import { ActivityList } from 'components/lists/ActivityList';
import { HorizontalThumbnailList } from 'components/lists/HorizontalThumbnailList';

import { useHomeData } from '../../hooks/useHomeData';

export function HomeScreen(): JSX.Element {
  const { recentVideos, teammateActivity } = useHomeData();

  return (
    <Box flex={1} safeArea>
      <ScrollView flex={1}>
        <Heading fontSize="md" pt="4" pb="2" pl={8} color={'white'}>
          Just added Videos
        </Heading>
        <HorizontalThumbnailList data={recentVideos} shouldAddPadding={true} />
        <Box pl={8} pr={8} pt={4}>
          <Heading fontSize="md" pt="4" pb="4" color={'white'}>
            Teammate Activity
          </Heading>
          <ActivityList data={teammateActivity} />
        </Box>
      </ScrollView>
    </Box>
  );
}
