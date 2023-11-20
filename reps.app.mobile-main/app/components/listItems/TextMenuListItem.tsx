import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, VStack } from 'native-base';

import { TextMenuListDataItem } from 'models/list.model';

interface Props {
  item: TextMenuListDataItem;
}

const TextMenuListItem: FC<Props> = ({ item }): JSX.Element => {
  const navigation = useNavigation<any>();

  const { subTitle, title, navTarget, onPress, params } = item;

  return (
    <Pressable
      onPress={
        onPress
          ? onPress
          : (): void => {
              if (navTarget) {
                navigation.navigate(navTarget, params);
              }
            }
      }
    >
      <VStack>
        {title && (
          <Text fontSize={12} fontWeight={700} lineHeight={18}>
            {item.title}
          </Text>
        )}
        {subTitle && (
          <Text fontSize={12} fontWeight={400} lineHeight={18} mt={1}>
            {item.subTitle}
          </Text>
        )}
      </VStack>
    </Pressable>
  );
};

export default TextMenuListItem;
