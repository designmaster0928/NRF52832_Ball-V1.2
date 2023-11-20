import React from 'react';
import { StyleSheet } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Box, IconButton, useSafeArea } from 'native-base';

export function BackButtonFloating(): JSX.Element {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  const navigation = useNavigation();

  return (
    <Box {...safeAreaProps} position={'absolute'}>
      <IconButton
        onPress={(): void => navigation.goBack()}
        icon={
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={styles.backButton}
            size={20}
          />
        }
        pt={4}
        pl={4}
        _pressed={{ bg: 'transparent' }}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: 'white',
  },
});
