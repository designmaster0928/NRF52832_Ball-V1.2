import React, { FC } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Heading, HStack, IconButton, Image, Text, VStack } from 'native-base';

interface Props {
  imageSource?: string;
  shouldShowShareButton?: boolean;
  subtitle?: string;
  title: string;
}

const ImageTitleHeader: FC<Props> = ({
  imageSource,
  shouldShowShareButton,
  subtitle,
  title,
}): JSX.Element => {
  return (
    <HStack justifyContent={'center'} alignItems={'center'}>
      {imageSource ? (
        <Image
          alt={title || ''}
          borderRadius={5}
          h={50}
          src={imageSource}
          w={50}
          bg={'gray.600'}
        />
      ) : (
        <></>
      )}

      <VStack flex={1} ml={imageSource ? 4 : 0}>
        <Heading fontWeight={700} fontSize={16} lineHeight={22}>
          {title}
        </Heading>
        <Text
          fontWeight={600}
          fontSize={12}
          lineHeight={16}
          color={'white:alpha.50'}
          mt={1}
        >
          {subtitle}
        </Text>
      </VStack>
      {shouldShowShareButton ? (
        <IconButton
          onPress={(): void => console.log('We don\t know what this does yet')}
          w={8}
          p={2}
          ml={2}
          icon={
            <FontAwesomeIcon icon={faShareNodes} color={'white'} size={18} />
          }
          _pressed={{
            bg: 'secondary.400:alpha.50',
          }}
        />
      ) : (
        <></>
      )}
    </HStack>
  );
};

export default ImageTitleHeader;
