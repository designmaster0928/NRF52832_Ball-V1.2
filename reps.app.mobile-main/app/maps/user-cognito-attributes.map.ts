import { CognitoUserAttributes } from 'models/cognito-attributes.model';
import { UserAttributes } from 'models/user-attributes.model';

export function mapUserAttributesToCognitoAttributes(
  payload: Partial<UserAttributes>,
): CognitoUserAttributes {
  const mapping = {
    email: 'email',
    firstName: 'given_name',
    lastName: 'family_name',
    nickname: 'nickname',
    phone: 'phone_number',
  };

  const cognitoAttributes: Partial<CognitoUserAttributes> = {};

  for (const [key, value] of Object.entries(mapping)) {
    if (payload[key as keyof UserAttributes]) {
      cognitoAttributes[value as keyof CognitoUserAttributes] = (
        payload as any
      )[key as keyof UserAttributes];
    }
  }

  return cognitoAttributes;
}

export function mapCognitoAttributesToUserAttributes(
  payload: CognitoUserAttributes,
): Partial<UserAttributes> {
  const mapping = {
    email: 'email',
    family_name: 'lastName',
    given_name: 'firstName',
    nickname: 'nickname',
    phone_number: 'phone',
  };

  const userAttributes: Partial<UserAttributes> = {};

  for (const [key, value] of Object.entries(mapping)) {
    if (payload[key as keyof CognitoUserAttributes]) {
      userAttributes[value as keyof UserAttributes] =
        payload[key as keyof CognitoUserAttributes];
    }
  }

  return userAttributes as UserAttributes;
}
