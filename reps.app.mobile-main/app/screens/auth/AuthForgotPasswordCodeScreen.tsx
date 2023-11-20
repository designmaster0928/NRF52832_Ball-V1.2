import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Heading, Text, VStack } from 'native-base';

import TextField from 'components/forms/TextField';
import { MainHeader } from 'components/headers/MainHeader';
import { RootNavigation } from 'enums/navigation.enum';

const AuthForgotPasswordCodeScreen: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Flex flex={1} bg={'black'}>
      <MainHeader title={'Forgot Password'} canGoBack={true} isBlack={true} />
      <VStack m={4} mt={8}>
        <Heading fontSize={24} fontWeight={700} lineHeight={32}>
          Code
        </Heading>
        <TextField />
        <Text fontSize={11} fontWeight={700} lineHeight={16} mt={2}>
          You should receive a 6 digit code in your email. Please enter it
          above.
        </Text>
        <Button
          colorScheme={'secondary'}
          mt={8}
          onPress={(): void => {
            navigation.navigate(RootNavigation.AuthResetPasswordScreen);
          }}
          _text={{
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 22,
          }}
        >
          Next
        </Button>
      </VStack>
    </Flex>
  );
};

export default AuthForgotPasswordCodeScreen;
