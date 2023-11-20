import { Auth } from 'aws-amplify';

import { CognitoUserAttributes } from 'models/cognito-attributes.model';
import { UserAttributes } from 'models/user-attributes.model';

import { mapUserAttributesToCognitoAttributes } from '../maps/user-cognito-attributes.map';

export async function updateUserAttributes(
  payload: Partial<UserAttributes>,
): Promise<string | undefined> {
  try {
    const mappedPayload: Partial<CognitoUserAttributes> =
      mapUserAttributesToCognitoAttributes(payload);

    const user = await Auth.currentAuthenticatedUser();

    console.log('update payload!', JSON.stringify(mappedPayload, null, 2));
    return await Auth.updateUserAttributes(user, mappedPayload).catch((err) => {
      console.log('updateUserAttributes error!', err);
      return Promise.resolve(String(err));
    });
  } catch (err) {
    return Promise.resolve(String(err));
  }
}
