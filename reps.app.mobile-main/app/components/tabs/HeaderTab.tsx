import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Center, Heading, HStack } from 'native-base';

import { TeammateTabNavigation } from 'enums/navigation.enum';

export interface Item {
  id: TeammateTabNavigation;
  title: string;
}

interface Props {
  items: Array<Item>;
  onChange?: (selectedId: TeammateTabNavigation) => void;
  selected?: string;
}

const HeaderTab: FC<Props> = ({
  items,
  onChange,
  selected = items[0].id,
}): JSX.Element => {
  return (
    <HStack bg={'primary.400'} width={'100%'}>
      {items.map((item: Item) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={(): void => {
              if (onChange) {
                onChange(item.id);
              }
            }}
            style={styles.touchable}
          >
            <Box
              borderBottomColor={selected === item.id ? 'white' : 'transparent'}
              borderBottomWidth={selected === item.id ? 5 : 0}
              py={4}
            >
              <Center>
                <Heading fontSize={12} fontWeight={700} lineHeight={18}>
                  {item.title?.toLocaleUpperCase()}
                </Heading>
              </Center>
            </Box>
          </TouchableOpacity>
        );
      })}
    </HStack>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
});

export default HeaderTab;
