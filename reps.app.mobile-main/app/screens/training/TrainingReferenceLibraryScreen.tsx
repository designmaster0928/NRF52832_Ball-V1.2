import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Flex } from 'native-base';

import SearchBar from 'components/forms/SearchBar';
import { MainHeader } from 'components/headers/MainHeader';
import TwoCardUpList from 'components/lists/TwoUpCardList';
import { TrainingNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { data } from '../../mocks/training-reference-library.mock';

const TrainingReferenceLibraryScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();
  return (
    <Flex flex={1}>
      <MainHeader title={'Reference Library'} canGoBack={true} />
      <TwoCardUpList
        data={data}
        header={
          <SearchBar placeholder={'Search through the reference library'} />
        }
        onPressItem={(): void => {
          navigation.navigate(
            TrainingNavigation.TrainingReferenceLibraryItemScreen,
          );
        }}
      />
    </Flex>
  );
};

export default TrainingReferenceLibraryScreen;
