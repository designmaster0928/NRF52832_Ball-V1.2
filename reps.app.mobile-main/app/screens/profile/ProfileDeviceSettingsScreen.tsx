import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import MenuList from 'components/lists/MenuList';
import { MMKV } from 'db/mmkv-storage.db';
import { ProfileNavigation, RootNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

const ProfileDeviceSettingsScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp>();
  return (
    <Flex flex={1}>
      <MainHeader title={'Equipment / Device Settings'} canGoBack={true} />
      <MenuList
        items={[
          {
            navigationName: ProfileNavigation.ProfileBluetoothDebuggerScreen,
            title: 'Bluetooth Debugger',
          },
          {
            onPress: (): void => {
              navigation.navigate(RootNavigation.SharedBallStatScreen);
            },
            title: 'Speedometer Calibration',
          },
          {
            onPress: (): void => {
              console.log('Clearing Database');
              MMKV.clearStore();
            },
            title: 'Clear Database',
          },
        ]}
        containerProps={{ mb: 8, mt: 6 }}
      />
    </Flex>
  );
};

export default ProfileDeviceSettingsScreen;
