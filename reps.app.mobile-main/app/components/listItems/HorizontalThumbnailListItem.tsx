import React from 'react';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { AspectRatio, Box, HStack, Image, Text, VStack } from 'native-base';

import { HorizontalThumbnailListDataItem } from 'models/list.model';

interface Props {
  item: HorizontalThumbnailListDataItem;
}

export function HorizontalThumbnailListItem(props: Props): JSX.Element {
  const { item } = props;

  return (
    <Box pl={2} pr={2} py="2">
      <VStack>
        <AspectRatio
          ratio={{
            base: 163 / 122,
          }}
          width={{
            base: 163,
          }}
        >
          <Box flex={1}>
            <Image src={item.thumbnail} alt={item.description} flex={1} />
            {item.genre ? (
              <HStack
                alignItems={'center'}
                bg={'#D9D9D9'}
                bottom={2}
                left={2}
                position={'absolute'}
                px={'4px'}
                py={'2px'}
              >
                <FontAwesomeIcon icon={faMusic} size={12} />
                <Text
                  color={'#423F42'}
                  fontSize={10}
                  fontWeight={700}
                  lineHeight={14}
                  ml={2}
                >
                  {item.genre}
                </Text>
              </HStack>
            ) : (
              <></>
            )}
          </Box>
        </AspectRatio>

        <Text fontSize={'sm'} color={'white'} pt={1}>
          {item.description}
        </Text>
      </VStack>
    </Box>
  );
}
