import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from 'native-base';

import PasswordField from 'components/forms/PasswordField';
import TextField from 'components/forms/TextField';
import { MainHeader } from 'components/headers/MainHeader';
import { useDomainContext } from 'context/domain.context';
import { RootNavigation } from 'enums/navigation.enum';

const AuthLoginScreen: FC = () => {
  const navigation = useNavigation<any>();
  const [shouldShow, setShouldShow] = useState(false);

  const [, domainContextActions] = useDomainContext();

  return (
    <Flex flex={1} bg={'black'}>
      <MainHeader title={'Login'} canGoBack={true} isBlack={true} />
      <VStack m={4} mt={8}>
        <Heading fontSize={24} fontWeight={700} lineHeight={32}>
          Email
        </Heading>
        <TextField />

        <Heading fontSize={24} fontWeight={700} lineHeight={32} mt={4}>
          Password
        </Heading>
        <PasswordField shouldShow={shouldShow} onPressIcon={setShouldShow} />

        <Button
          colorScheme={'secondary'}
          mt={8}
          onPress={(): void => {
            domainContextActions.login();
          }}
          _text={{
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 22,
          }}
        >
          Login
        </Button>

        <Button
          mt={4}
          onPress={(): void => {
            navigation.navigate(RootNavigation.AuthForgotPasswordScreen);
          }}
          variant={'link'}
          w={'100%'}
          _text={{
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 20,
          }}
        >
          Forget Password?
        </Button>
      </VStack>
    </Flex>
  );
};

export default AuthLoginScreen;
