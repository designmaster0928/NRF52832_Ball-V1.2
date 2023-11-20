/* eslint-disable max-lines-per-function */
import React, { FC, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Flex, Heading, HStack, Input, VStack } from 'native-base';

import Button from 'components/buttons/Button';
import { MainHeader } from 'components/headers/MainHeader';
import { CognitoUserAttributes } from 'models/cognito-attributes.model';
import {
  EditInputParams,
  EditParams,
  EditValuesObject,
} from 'models/edit.model';
import { UserAttributes } from 'models/user-attributes.model';
import { updateUserAttributes } from 'services/user-attributes.service';

import { useUser } from '../../hooks/useUser.hook';
import { mapUserAttributesToCognitoAttributes } from '../../maps/user-cognito-attributes.map';

const ProfileEditScreen: FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [, setUserAttributes] = useUser();

  const { params } = route;

  const mappedInitialValues = useMemo(() => {
    return (params as EditParams)?.inputs?.reduce(
      (acc: EditValuesObject, item: EditInputParams) => {
        acc[item.dataId] = item.data;
        return acc;
      },
      {},
    );
  }, [params]);

  console.log('mappedInitialValues', mappedInitialValues);

  const [values, setValues] = useState(mappedInitialValues);

  console.log(values);

  return (
    <Flex flex={1}>
      <MainHeader title={(params as EditParams)?.title} canGoBack={true} />
      {(params as EditParams)?.inputs?.map(
        ({ title, data, dataId }: EditInputParams, index: number) => {
          return (
            <VStack m={4} key={index}>
              <Heading fontSize={12} fontWeight={700} lineHeight={18}>
                {title}
              </Heading>
              <Input
                bg={'black'}
                defaultValue={data}
                onChangeText={(changedText: string): void => {
                  setValues((prevState: EditValuesObject) => {
                    return {
                      ...prevState,
                      [dataId]: changedText,
                    };
                  });
                }}
                mt={2}
                _input={{
                  bg: 'black',
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 700,
                  m: 2,
                }}
                _focus={{
                  bg: 'black',
                  borderColor: 'backgroundGray.100',
                }}
              />
            </VStack>
          );
        },
      )}
      {(params as EditParams)?.inputs.length && (
        <HStack w={'100%'} px={4}>
          <Button
            bg={'gray.500'}
            _pressed={{ bg: 'gray.600' }}
            onPress={(): void => {
              navigation.goBack();
            }}
          >
            Cancel
          </Button>
          <Box w={4} />
          <Button
            bg={'secondary.400'}
            _text={{ color: 'textVisibleSecondary.400' }}
            _pressed={{ bg: 'secondary.600' }}
            onPress={(): void => {
              console.log();
              setUserAttributes((prevState: UserAttributes) => {
                return {
                  ...prevState,
                  ...mapUserAttributesToCognitoAttributes(values as any),
                };
              });

              navigation.goBack();
            }}
          >
            Save
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default ProfileEditScreen;
