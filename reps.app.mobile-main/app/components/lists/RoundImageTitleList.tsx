import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'native-base';
import { InterfaceFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types';

import RoundedImageTitleListItem from 'components/listItems/RoundImageTitleListItem';
import {
  RoundImageTitleListData,
  RoundImageTitleListDataItem,
} from 'models/list.model';

interface Props {
  containerProps?: Partial<InterfaceFlatListProps<RoundImageTitleListDataItem>>;
  data?: RoundImageTitleListData;
}

const RoundImageTitleList: FC<Props> = (props: Props) => {
  const { containerProps, data } = props;
  return (
    <FlatList
      mt={2}
      data={data}
      renderItem={({ item }): JSX.Element => (
        <RoundedImageTitleListItem item={item} />
      )}
      keyExtractor={(item): string => String(item.id)}
      _contentContainerStyle={styles.contentContainer}
      {...containerProps}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    margin: '16px',
  },
});

export default RoundImageTitleList;
