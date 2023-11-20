import { useEffect, useState } from 'react';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import { Auth } from 'aws-amplify';

import { dbConfig } from 'config/db.config';
import { MMKV } from 'db/mmkv-storage.db';
import { CognitoUserAttributes } from 'models/cognito-attributes.model';
import { UserAttributes } from 'models/user-attributes.model';
import { updateUserAttributes } from 'services/user-attributes.service';

import { mapCognitoAttributesToUserAttributes } from '../maps/user-cognito-attributes.map';

type SetUserAttributes = (
  value:
    | Partial<UserAttributes>
    | ((prevValue: Partial<UserAttributes>) => Partial<UserAttributes>),
) => void;

type ReturnPayload = [Partial<UserAttributes>, SetUserAttributes];

const defaultPayload: CognitoUserAttributes = {
  email: '',
  family_name: '',
  given_name: '',
  nickname: '',
  phone_number: '',
};

export function useUser(forceStateRefresh?: boolean): ReturnPayload {
  const [user, setUser] = useMMKVStorage<CognitoUserAttributes>(
    dbConfig.storageKeys.userCognitoAttributes,
    MMKV,
    defaultPayload,
  );

  useEffect(() => {
    (async (): Promise<void> => {
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });
      setUser(authenticatedUser.attributes);
      console.log(`attributes:`, authenticatedUser.attributes);
    })();
  }, []);

  return [
    mapCognitoAttributesToUserAttributes(user),
    (
      payload:
        | Partial<UserAttributes>
        | ((prevValue: Partial<UserAttributes>) => Partial<UserAttributes>),
    ): void => {
      if (typeof payload === 'function') {
        setUser((prevValue) => {
          const updatedValue = {
            ...prevValue,
            ...payload(mapCognitoAttributesToUserAttributes(prevValue)),
          };

          updateUserAttributes(updatedValue);

          return {
            ...prevValue,
            ...payload(mapCognitoAttributesToUserAttributes(prevValue)),
          };
        });
      } else {
        setUser((prevValue) => {
          const updatedValue = {
            ...prevValue,
            ...payload,
          };

          updateUserAttributes(updatedValue);

          return updatedValue;
        });
      }
    },
  ];
}
