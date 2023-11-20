import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, useSafeArea, VStack } from 'native-base';

import HeaderConnectivityBadge from 'components/bluetooth/HeaderConnectivityBadge';

interface Props {
  canGoBack?: boolean;
  isBlack?: boolean;
  title: string;
}

export function MainHeader({ canGoBack, isBlack, title }: Props): JSX.Element {
  const navigation = useNavigation();
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  return (
    <VStack>
      <Box bg={isBlack ? 'black' : '#194e97'} {...safeAreaProps} height={0} />
      <HStack
        p={4}
        bg={isBlack ? 'black' : 'primary.400'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <HStack>
          {canGoBack ? (
            <TouchableOpacity onPress={(): void => navigation.goBack()}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size={20}
                style={styles.backButton}
              />
            </TouchableOpacity>
          ) : null}
          <Heading fontSize={'md'}>{title}</Heading>
        </HStack>

        <HeaderConnectivityBadge />
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: 'white',
    marginRight: 16,
  },
});
