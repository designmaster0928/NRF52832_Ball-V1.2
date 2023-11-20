import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Heading, Image, Text, VStack } from 'native-base';

import { ReferenceLibraryDataItem } from 'models/list.model';

interface Props {
  item: ReferenceLibraryDataItem;
  onPress?: () => void;
}

const TwoUpCardListItem: FC<Props> = ({ item, onPress }): JSX.Element => {
  const { imageSource, coach, title } = item;

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={(): void => {
        if (onPress) {
          onPress();
        }
      }}
    >
      <VStack>
        <Image
          alt={title || ''}
          style={{ aspectRatio: 1 / 1 }}
          borderRadius={3}
          src={imageSource}
          bg={'gray.600'}
        />
        <Heading lineHeight={14} fontSize={12} fontWeight={600} mt={2}>
          {title}
        </Heading>
        <Text lineHeight={14} fontSize={11} fontWeight={400}>
          {coach}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    marginBottom: 22,
    marginHorizontal: 12,
  },
});

export default TwoUpCardListItem;
