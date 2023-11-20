import React, { FC } from 'react';
import { FlatList, VStack } from 'native-base';

import SearchBar from 'components/forms/SearchBar';
import TrainingMediaListItem from 'components/listItems/TrainingMediaListItem';
import { TrainingMediaListData } from 'models/list.model';

import { useDeferredData } from '../../hooks/useDeferredData';

interface Props {
  data?: TrainingMediaListData;
}

const TrainingMediaList: FC<Props> = ({ data }): JSX.Element => {
  const trainingData = useDeferredData<TrainingMediaListData>(data);

  return (
    <VStack>
      <SearchBar placeholder={'Search through wall ball coaching'} />
      <FlatList
        mt={4}
        data={trainingData}
        renderItem={({ item }): JSX.Element => (
          <TrainingMediaListItem item={item} />
        )}
        keyExtractor={(item): string => String(item.id)}
      />
    </VStack>
  );
};

export default TrainingMediaList;
