import React, { FC } from 'react';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import TextMenuList from 'components/lists/TextMenuList';
import { TextMenuListData } from 'models/list.model';

const menuData: TextMenuListData = [
  {
    id: '1',
    subTitle: '1.1',
    title: 'Version',
  },
];

const ProfileAppSettingsScreen: FC = () => {
  return (
    <Flex flex={1}>
      <MainHeader title={'App Settings'} canGoBack={true} />
      <TextMenuList data={menuData} />
    </Flex>
  );
};

export default ProfileAppSettingsScreen;
