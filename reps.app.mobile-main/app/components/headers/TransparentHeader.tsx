import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, useSafeArea, VStack } from 'native-base';

import HeaderConnectivityBadge from 'components/bluetooth/HeaderConnectivityBadge';

interface Props {
  canGoBack?: boolean;
  title?: string;
}

const TransparentHeader: FC<Props> = ({
  canGoBack,
  title,
}: Props): JSX.Element => {
  const navigation = useNavigation();
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  return (
    <VStack position={'absolute'} left={0} right={0}>
      <Box {...safeAreaProps} height={0} />
      <HStack p={4} justifyContent={'space-between'} alignItems={'center'}>
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
};

const styles = StyleSheet.create({
  backButton: {
    color: 'white',
    marginRight: 16,
  },
});

export default TransparentHeader;
