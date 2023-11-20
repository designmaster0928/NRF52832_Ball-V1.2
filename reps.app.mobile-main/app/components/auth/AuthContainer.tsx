/* eslint-disable react-native/no-inline-styles */
import React, { FC, PropsWithChildren } from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Box,
  Center,
  Flex,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'native-base';

import ImageGradientBackground from 'components/images/ImageGradientBackground';
import { localImages } from 'config/images.config';

import Logo from '../../assets/brand/Logo.svg';

const dimensions = Dimensions.get('window');
const windowWidth = Math.floor(dimensions.width);

const AuthContainer: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
      flex={1}
    >
      <ImageGradientBackground
        source={localImages.login}
        height={'70%'}
        layout={'bottomOnly'}
      />
      <Flex flex={1}>
        <View bottom={0} w={'100%'} flex={1} zIndex={10}>
          <ScrollView
            height={'100%'}
            contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <Flex flex={1} justifyContent={'flex-end'}>
              <Box>
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                  style={styles.imageGradientTop}
                />
              </Box>
              <Center
                minHeight={300}
                _ios={{ marginBottom: -6, zIndex: 1 }}
                _android={{ marginBottom: -6, zIndex: 1 }}
              >
                <Box>
                  <Logo width={275} height={125} />
                </Box>

                {/* <Heading
                  fontSize={24}
                  fontWeight={700}
                  lineHeight={32}
                  mt={4}
                  textAlign={'center'}
                >
                  Train smarter.{'\n'} Get REPS.
                </Heading> */}
              </Center>
              <Box bg={'black'} safeAreaBottom>
                {children}
              </Box>
            </Flex>
          </ScrollView>
        </View>
      </Flex>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imageGradientTop: {
    height: 160,
    position: 'absolute',
    top: 120,
    width: windowWidth,
  },
  keyboardAvoidingView: {
    backgroundColor: 'black',
  },
});

export default AuthContainer;
