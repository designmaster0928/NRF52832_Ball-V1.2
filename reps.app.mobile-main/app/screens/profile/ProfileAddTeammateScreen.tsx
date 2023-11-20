import React, { FC, useState } from 'react';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import HeaderTab, { Item } from 'components/tabs/HeaderTab';
import { TeammateTabNavigation } from 'enums/navigation.enum';
import AddATeammateTabNavigation from 'navigation/AddATeammateTabNavigation';

const items: Array<Item> = [
  { id: TeammateTabNavigation.Contacts, title: 'Contacts' },
  { id: TeammateTabNavigation.Username, title: 'Username' },
];

const ProfileAddTeammatesScreen: FC = () => {
  const [selected, setSelected] = useState<TeammateTabNavigation>(
    TeammateTabNavigation.Contacts,
  );

  return (
    <Flex flex={1}>
      <MainHeader title={'Add A Friend'} canGoBack={true} />
      <HeaderTab
        items={items}
        onChange={(selectedId: TeammateTabNavigation): void => {
          setSelected(selectedId);
        }}
        selected={selected}
      />
      <AddATeammateTabNavigation selectedTab={selected} />
    </Flex>
  );
};

export default ProfileAddTeammatesScreen;
