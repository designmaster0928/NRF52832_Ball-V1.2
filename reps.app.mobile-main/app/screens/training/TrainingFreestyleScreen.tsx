import React from 'react';
import { Box, ScrollView } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import { TwoToneHeader } from 'components/headers/TwoToneHeader';
import ImageGradientBackground from 'components/images/ImageGradientBackground';
import { ImageMenuList } from 'components/lists/ImageMenuList';
import { localImages } from 'config/images.config';
import { trainingFreestyleMenuData } from 'config/training-menus.config';

export function TrainingFreestyleScreen(): JSX.Element {
  return (
    <Box flex={1}>
      <MainHeader title={'R1 Ball'} isBlack={true} />
      <ScrollView flex={1} contentContainerStyle={{ flex: 1 }}>
        <ImageGradientBackground height={'65%'} source={localImages.login} />
        <Box position={'absolute'} bottom={4} width={'100%'}>
          <Box px={4}>
            <TwoToneHeader title={'Training'} />
          </Box>

          <ImageMenuList
            data={trainingFreestyleMenuData}
            shouldDisableScroll={true}
          />
        </Box>
      </ScrollView>
    </Box>
  );
}
