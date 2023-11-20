import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Heading, VStack } from 'native-base';

import TextField from 'components/forms/TextField';
import { MainHeader } from 'components/headers/MainHeader';
import { RootNavigation } from 'enums/navigation.enum';

const AuthForgotPasswordScreen: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Flex flex={1} bg={'black'}>
      <MainHeader title={'Forgot Password'} canGoBack={true} isBlack={true} />
      <VStack m={4} mt={8}>
        <Heading fontSize={24} fontWeight={700} lineHeight={32}>
          Email
        </Heading>
        <TextField />

        <Button
          colorScheme={'secondary'}
          mt={8}
          onPress={(): void => {
            navigation.navigate(RootNavigation.AuthForgotPasswordCodeScreen);
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

export default AuthForgotPasswordScreen;
