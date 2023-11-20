import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'native-base';

import { HorizontalThumbnailListItem } from 'components/listItems/HorizontalThumbnailListItem';
import { HorizontalThumbnailListData } from 'models/list.model';

interface Props {
  data?: HorizontalThumbnailListData;
  shouldAddPadding?: boolean;
}

export function HorizontalThumbnailList(props: Props): JSX.Element {
  const { data, shouldAddPadding } = props;

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={
        shouldAddPadding
          ? styles.flatListContent
          : styles.flatListContentNoPadding
      }
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }): JSX.Element => (
        <HorizontalThumbnailListItem item={item} />
      )}
      keyExtractor={(item): string => item.id}
    />
  );
}

const styles = StyleSheet.create({
  flatList: { flexGrow: 0 },
  flatListContent: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  flatListContentNoPadding: {
    marginLeft: -8,
    paddingRight: 0,
  },
});
