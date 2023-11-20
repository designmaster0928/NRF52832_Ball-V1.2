/*
 * Import and initialize data streams;
 * import './streams/ball.stream';
 * import './streams/bluetooth.stream';
 * import './streams/db.stream';
 */

import 'db/mmkv-storage.db';
import 'db/session.db';

import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { NativeBaseProvider, StatusBar, View } from 'native-base';

import AuthContainer from 'components/auth/AuthContainer';
import AuthStorage from 'components/auth/AuthStorage';
import DomainContextProvider from 'context/domain.context';
import { formatPhoneNumber } from 'helpers/phoneNumber.helper';
import { RootStackNavigation } from 'navigation/RootNavigation';
import { amplifyTheme } from 'themes/amplify.theme';

import { useBootstrap } from './hooks/useBootstrap';
import { useDev } from './hooks/useDev.hook';
import { theme } from './themes/default.theme';

const App: FC = () => {
  useBootstrap();
  useDev({
    shouldMockBallStream: false,
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" />
      <NativeBaseProvider theme={theme}>
        <ThemeProvider theme={amplifyTheme}>
          <Authenticator.Provider>
            <AuthStorage />
            <Authenticator
              services={{
                handleSignUp: (formData): Promise<ISignUpResult> => {
                  const { username, password, attributes } = formData;

                  attributes.phone_number = formatPhoneNumber(
                    attributes.phone_number,
                  );

                  return Auth.signUp({
                    attributes,
                    autoSignIn: {
                      enabled: true,
                    },
                    password,
                    username,
                  });
                },
              }}
              Container={(props): JSX.Element => (
                <AuthContainer>
                  {props.children}
                  {/* <Authenticator.Container
                  {...props}
                  style={styles.authContainer}
                  contentContainerStyle={styles.authContainer}
                  keyboardAvoidingViewStyle={styles.keyboardAvoidingView}
                  scrollViewContentContainerStyle={
                    styles.scrollViewContentContainer
                  }
                /> */}
                </AuthContainer>
              )}
            >
              <DomainContextProvider>
                <RootStackNavigation />
              </DomainContextProvider>
            </Authenticator>
          </Authenticator.Provider>
        </ThemeProvider>
      </NativeBaseProvider>
    </>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    // BackgroundColor: 'red',
  },
  contentContainerStyle: {
    // BackgroundColor: 'blue',
  },
  keyboardAvoidingView: {
    backgroundColor: 'transparent',
    // BackgroundColor: 'green',
  },
  scrollViewContentContainer: {
    // BackgroundColor: 'yellow',
    justifyContent: 'flex-end',
  },
});

export default App;
