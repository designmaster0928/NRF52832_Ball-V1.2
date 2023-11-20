import React, { FC } from 'react';
import { Box, FlatList } from 'native-base';

import TextMenuListItem from 'components/listItems/TextMenuListItem';
import { TextMenuListData } from 'models/list.model';

interface Props {
  data: TextMenuListData;
}

const TextMenuList: FC<Props> = ({ data }): JSX.Element => {
  return (
    <FlatList
      mt={2}
      p={4}
      data={data}
      renderItem={({ item }): JSX.Element => <TextMenuListItem item={item} />}
      keyExtractor={(item): string => item.id}
      ItemSeparatorComponent={(): JSX.Element => <Box mt={8} />}
      ListHeaderComponent={(): JSX.Element => <Box h={2} />}
    />
  );
};

export default TextMenuList;
