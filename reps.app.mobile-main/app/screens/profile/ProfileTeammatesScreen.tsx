import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex } from 'native-base';

import ButtonSecondary from 'components/buttons/ButtonSecondary';
import { MainHeader } from 'components/headers/MainHeader';
import RoundImageTitleList from 'components/lists/RoundImageTitleList';
import { ProfileNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { data } from '../../mocks/profile-teammates.mock';

const ProfileTeammatesScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp>();
  return (
    <Flex flex={1}>
      <MainHeader title={'Friends'} canGoBack={true} />
      <RoundImageTitleList
        containerProps={{
          ListHeaderComponent: (
            <ButtonSecondary
              onPress={(): void => {
                navigation.navigate(ProfileNavigation.ProfileAddTeammateScreen);
              }}
            >
              Add a teammate
            </ButtonSecondary>
          ),
          ListHeaderComponentStyle: styles.flatListHeader,
        }}
        data={data}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  flatListHeader: {
    paddingBottom: 16,
  },
});

export default ProfileTeammatesScreen;
