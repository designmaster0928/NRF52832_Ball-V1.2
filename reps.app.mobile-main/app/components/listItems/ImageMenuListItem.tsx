import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, Image, Text, VStack } from 'native-base';

import { ImageMenuListDataItem } from 'models/list.model';
import { StackNavigationProp } from 'models/navigation.model';

interface Props {
  item: ImageMenuListDataItem;
}

const thumbnailWidth = '65%';

export function ImageMenuListItem(props: Props): JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();

  const { item } = props;
  return (
    <TouchableOpacity
      key={item.id}
      onPress={(): void => {
        navigation.navigate(item.navTarget as any);
      }}
    >
      <Box
        bg={item.theme === 'dark' ? 'black' : 'white'}
        borderRadius={4}
        mx={4}
        my={2}
        p={4}
      >
        <Box
          borderBottomRightRadius={4}
          borderTopRightRadius={4}
          bottom={0}
          left={thumbnailWidth}
          position={'absolute'}
          right={0}
          top={0}
        >
          <Image
            alt={item.title}
            h={'100%'}
            resizeMode={'cover'}
            source={item.source}
            w={'100%'}
          />
        </Box>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={
            item.theme === 'dark'
              ? ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']
              : ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']
          }
          style={styles.imageGradient}
        />
        <VStack>
          <Heading
            color={item.theme === 'dark' ? 'white' : 'defaultText.400'}
            fontSize={'sm'}
            mb={2}
          >
            {item.title}
          </Heading>
          <Text
            color={item.theme === 'dark' ? 'white' : 'defaultText.400'}
            fontSize={'xs'}
            ml={2}
            w={'50%'}
          >
            {item.description}
          </Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageGradient: {
    bottom: 0,
    left: thumbnailWidth,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
