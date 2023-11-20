import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Heading, Input, Text, VStack } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import { RootNavigation } from 'enums/navigation.enum';

const AuthSignUpEmailScreen: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Flex flex={1} bg={'black'}>
      <MainHeader title={'Create Account'} canGoBack={true} isBlack={true} />
      <VStack m={4} mt={8}>
        <Heading fontSize={24} fontWeight={700} lineHeight={32}>
          What's your email?
        </Heading>
        <Input
          bg={'#6c6c6c'}
          defaultValue={''}
          mt={2}
          _android={{
            _input: {
              m: 0,
            },
          }}
          _input={{
            bg: '#6c6c6c',
            color: 'white',
            fontSize: 12,
            fontWeight: 700,
            m: 1,
          }}
          _focus={{
            bg: '#6c6c6c',
            borderColor: 'gray.200',
          }}
        />
        <Text fontSize={11} fontWeight={700} lineHeight={16} mt={2}>
          You'll need to confirm this email later.
        </Text>
        <Button
          colorScheme={'secondary'}
          mt={8}
          onPress={(): void => {
            navigation.navigate(RootNavigation.AuthSignUpPasswordScreen);
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

export default AuthSignUpEmailScreen;
