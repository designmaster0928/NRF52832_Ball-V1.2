import React from 'react';
import { FlatList } from 'native-base';

import { ImageMenuListItem } from 'components/listItems/ImageMenuListItem';
import { ImageMenuListData, ImageMenuListDataItem } from 'models/list.model';

interface Props {
  data?: ImageMenuListData;
  shouldDisableScroll?: boolean;
}

export function ImageMenuList(props: Props): JSX.Element {
  const { data, shouldDisableScroll } = props;
  if (data && shouldDisableScroll) {
    return (
      <>
        {data.map(
          (item: ImageMenuListDataItem): JSX.Element => (
            <ImageMenuListItem item={item} key={item.id} />
          ),
        )}
      </>
    );
  } else {
    return (
      <FlatList
        mt={2}
        data={data}
        renderItem={({ item }): JSX.Element => (
          <ImageMenuListItem item={item} />
        )}
        keyExtractor={(item): string => item.id}
      />
    );
  }
}
