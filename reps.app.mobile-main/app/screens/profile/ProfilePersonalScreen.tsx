/* eslint-disable max-lines-per-function */
import React, { FC, useMemo } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import TextMenuList from 'components/lists/TextMenuList';
import { ProfileNavigation } from 'enums/navigation.enum';

import { useUser } from '../../hooks/useUser.hook';

const ProfilePersonalScreen: FC = () => {
  const [user] = useUser();

  console.log(user);

  const menuData = useMemo(() => {
    return [
      {
        id: '1',
        navTarget: ProfileNavigation.ProfileEditScreen,
        params: {
          inputs: [
            {
              data: user.nickname,
              dataId: 'nickname',
              title: 'Display Name',
            },
          ],
          title: 'Name',
        },
        subTitle: user.nickname,
        title: 'Display Name',
      },
      {
        id: '2',
        navTarget: ProfileNavigation.ProfileEditScreen,
        params: {
          inputs: [
            {
              data: user.email,
              dataId: 'email-address',
              title: 'Email Address',
            },
          ],
          title: 'Email',
        },
        subTitle: user.email,
        title: 'Email',
      },
      /*
       * {
       *   id: '3',
       *   // NavTarget: ProfileNavigation.ProfileEditScreen,
       *   title: 'Two Factor Authentication',
       * },
       * {
       *   id: '4',
       *   // NavTarget: ProfileNavigation.ProfileEditScreen,
       *   title: 'Manage Subscription',
       * },
       * {
       *   id: '5',
       *   // NavTarget: ProfileNavigation.ProfileEditScreen,
       *   title: 'Delete Data',
       * },
       */
    ];
  }, [user]);

  return (
    <>
      <Flex flex={1}>
        <MainHeader title={'Personal'} canGoBack={true} />
        <TextMenuList data={menuData} />
      </Flex>
    </>
  );
};

export default ProfilePersonalScreen;
