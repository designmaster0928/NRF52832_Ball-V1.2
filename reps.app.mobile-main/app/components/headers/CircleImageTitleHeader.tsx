import React, { FC } from 'react';
import { Heading, HStack, Image, Text, VStack } from 'native-base';

interface Props {
  imageSource: string;
  shouldShowShareButton?: boolean;
  superTitle?: string;
  title: string;
}

const CircleImageTitleHeader: FC<Props> = ({
  imageSource,
  superTitle,
  title,
}): JSX.Element => {
  return (
    <HStack justifyContent={'center'} alignItems={'center'}>
      <Image
        alt={title || ''}
        borderRadius={22}
        h={44}
        src={imageSource}
        w={44}
        bg={'gray.600'}
      />
      <VStack flex={1} ml={4}>
        <Text
          fontWeight={400}
          fontSize={10}
          lineHeight={13}
          color={'white:alpha.50'}
        >
          {superTitle}
        </Text>
        <Heading fontWeight={600} fontSize={12} lineHeight={16}>
          {title}
        </Heading>
      </VStack>
    </HStack>
  );
};

export default CircleImageTitleHeader;
