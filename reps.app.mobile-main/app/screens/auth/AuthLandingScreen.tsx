import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, Flex, Heading, VStack } from 'native-base';

import { ImageGradientBackground } from 'components/images/ImageGradientBackground';
import { RootNavigation } from 'enums/navigation.enum';

import Logo from '../../assets/brand/Logo.svg';

const AuthLandingScreen: FC = () => {
  const navigation = useNavigation<any>();
  return (
    <Flex flex={1} bg={'black'}>
      <ImageGradientBackground height={'60%'} layout={'bottomOnly'} />

      <VStack>
        <Center>
          <Logo width="188" height="44" />
        </Center>
        <Center>
          <Heading
            fontSize={24}
            fontWeight={700}
            lineHeight={32}
            mt={4}
            textAlign={'center'}
          >
            Train smarter.{'\n'} Get REPS.
          </Heading>
        </Center>
        <Center mt={12} mx={4}>
          <Button
            onPress={(): void => {
              navigation.navigate(RootNavigation.AuthSignUpEmailScreen);
            }}
            w={'100%'}
            _text={{
              color: 'black',
              fontSize: 11,
              fontWeight: 700,
              lineHeight: 16,
            }}
          >
            Sign up free
          </Button>
        </Center>
        <Center mt={4}>
          <Button
            onPress={(): void => {
              navigation.navigate(RootNavigation.AuthLoginScreen);
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
            Log in
          </Button>
        </Center>
      </VStack>
    </Flex>
  );
};

export default AuthLandingScreen;
