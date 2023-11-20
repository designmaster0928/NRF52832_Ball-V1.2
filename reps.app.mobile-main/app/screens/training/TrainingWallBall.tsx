import React, { FC } from 'react';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import TrainingMediaList from 'components/lists/TrainingMediaList';

import { data } from '../../mocks/training-wall-ball.mock';

const TrainingWallBallScreen: FC = (): JSX.Element => {
  return (
    <Flex flex={1}>
      <MainHeader title={'Wall Ball'} canGoBack={true} />
      <TrainingMediaList data={data} />
    </Flex>
  );
};

export default TrainingWallBallScreen;
