import React, { FC, PropsWithChildren, useState } from 'react';
import {
  LayoutAnimation,
  LayoutChangeEvent,
  Platform,
  TouchableOpacity,
  UIManager,
} from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Box, Divider, Flex, Heading, HStack, VStack } from 'native-base';

interface Props extends PropsWithChildren {
  hiddenContent: JSX.Element;
  icon: IconProp;
  title: string;
}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const RevealContentContainer: FC<Props> = ({
  hiddenContent,
  icon,
  title,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  return (
    <VStack>
      <Divider borderColor={'white'} />
      <TouchableOpacity
        onPress={(): void => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsOpen(!isOpen);
        }}
      >
        <HStack justifyContent={'center'} alignItems={'center'} py={4}>
          <FontAwesomeIcon icon={icon} color={'white'} size={20} />
          <Heading
            flex={1}
            fontWeight={700}
            fontSize={16}
            lineHeight={22}
            ml={4}
          >
            {title}
          </Heading>

          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            color={'white'}
            size={16}
          />
        </HStack>
      </TouchableOpacity>
      <Flex height={isOpen ? contentHeight : 0} overflow={'hidden'}>
        <Box
          height={contentHeight || null}
          onLayout={(event: LayoutChangeEvent): void => {
            const { height } = event.nativeEvent.layout;
            if (!contentHeight && height) {
              setContentHeight(height);
            }
          }}
        >
          {hiddenContent}
        </Box>
      </Flex>
      <Divider borderColor={'white'} />
    </VStack>
  );
};

export default RevealContentContainer;
