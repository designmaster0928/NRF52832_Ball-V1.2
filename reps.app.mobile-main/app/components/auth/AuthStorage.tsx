import React, { FC, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

import { saveUserIdAsync } from '../../helpers/user.helper';

const AuthStorage: FC = (): JSX.Element => {
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user?.attributes?.sub) {
      saveUserIdAsync(user.attributes.sub);
    }
  }, [user]);

  return <></>;
};

export default AuthStorage;
