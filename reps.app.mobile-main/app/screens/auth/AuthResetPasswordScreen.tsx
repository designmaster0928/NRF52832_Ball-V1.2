import React, { FC, useState } from 'react';
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
import { MainHeader } from 'components/headers/MainHeader';
import { useDomainContext } from 'context/domain.context';

const AuthResetPasswordScreen: FC = () => {
  const [, domainContextActions] = useDomainContext();

  const [shouldShow, setShouldShow] = useState(false);

  return (
    <Flex flex={1} bg={'black'}>
      <MainHeader title={'Create Account'} canGoBack={true} isBlack={true} />
      <VStack m={4} mt={8}>
        <Heading fontSize={24} fontWeight={700} lineHeight={32}>
          Reset password
        </Heading>
        <PasswordField shouldShow={shouldShow} onPressIcon={setShouldShow} />
        <Text fontSize={11} fontWeight={700} lineHeight={16} mt={2}>
          Use at least 8 characters
        </Text>
        <Heading fontSize={24} fontWeight={700} lineHeight={32} mt={4}>
          Retype new password
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
          Confirm Password Reset
        </Button>
      </VStack>
    </Flex>
  );
};

export default AuthResetPasswordScreen;
