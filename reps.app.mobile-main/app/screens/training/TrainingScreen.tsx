import React, { FC } from 'react';
import { Box } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import { ImageMenuList } from 'components/lists/ImageMenuList';
import { trainingMainMenuData } from 'config/training-menus.config';

const TrainingScreen: FC = (): JSX.Element => {
  return (
    <Box flex={1}>
      <MainHeader title={'Training'} />
      <ImageMenuList data={trainingMainMenuData} />
    </Box>
  );
};

export default TrainingScreen;
