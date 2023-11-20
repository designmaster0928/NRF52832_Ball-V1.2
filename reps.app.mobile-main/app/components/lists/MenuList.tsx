import React, { FC } from 'react';
import { Box, IBoxProps } from 'native-base';

import IconMenuListItem, {
  Props as ItemProps,
} from '../listItems/MenuListItem';

interface Props {
  items: Array<ItemProps>;
  containerProps?: IBoxProps;
}

const MenuList: FC<Props> = ({ containerProps, items }): JSX.Element => {
  return (
    <Box {...containerProps}>
      {items.map((item: ItemProps, index: number) => {
        return <IconMenuListItem {...item} key={index} />;
      })}
    </Box>
  );
};

export default MenuList;
