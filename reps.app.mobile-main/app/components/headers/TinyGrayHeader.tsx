import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { Box, Flex, Heading, HStack } from 'native-base';

interface Props {
  title: string;
  wrapperProps?: ViewProps;
  isHidden?: boolean;
}

const TinyGrayHeader: FC<Props> = ({
  isHidden,
  title,
  wrapperProps,
}): JSX.Element => {
  if (!isHidden) {
    return (
      <HStack alignItems={'center'} mx={4} mt={6} {...wrapperProps}>
        <Heading fontSize={'10'} fontWeight={'700'} color={'black:alpha.25'}>
          {title}
        </Heading>
        <Box h={0.5} flex={1} bg={'#D9D9D9'} ml={2} />
      </HStack>
    );
  }

  return <></>;
};

export default TinyGrayHeader;
