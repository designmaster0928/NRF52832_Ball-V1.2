import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'native-base';

import TwoUpCardListItem from 'components/listItems/TwoUpCardListItem';
import { ReferenceLibraryData } from 'models/list.model';

import { useDeferredData } from '../../hooks/useDeferredData';

interface Props {
  data: any;
  header?: JSX.Element;
  onPressItem?: () => void;
}

const TwoCardUpList: FC<Props> = ({
  data,
  header,
  onPressItem,
}): JSX.Element => {
  const trainingData = useDeferredData<ReferenceLibraryData>(data);

  return (
    <FlatList
      ListHeaderComponent={header}
      ListHeaderComponentStyle={styles.listHeaderComponent}
      numColumns={2}
      px={4}
      data={trainingData}
      renderItem={({ item }): JSX.Element => (
        <TwoUpCardListItem item={item} onPress={onPressItem} />
      )}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

const styles = StyleSheet.create({
  listHeaderComponent: { marginBottom: 24, marginTop: 12 },
});

export default TwoCardUpList;
