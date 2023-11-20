import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { faBluetooth } from '@fortawesome/pro-solid-svg-icons/faBluetooth';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack } from 'native-base';

import { WrappedFontAwesomeIcon } from 'components/WrappedFontAwesomeIcon';
import { RootNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

import ConnectionIcon from './ConnectionIcon';

const HeaderConnectivityBadge: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <TouchableOpacity
      onPress={(): void => {
        navigation.navigate(
          RootNavigation.SharedBallConnectionManagementScreen,
        );
      }}
    >
      <HStack
        backgroundColor={'black'}
        w={'69px'}
        borderRadius={4}
        alignItems={'center'}
        px={'7px'}
        py={'4px'}
        justifyContent={'space-between'}
      >
        <Heading fontWeight={'800'} fontSize={'16'} lineHeight={22}>
          R1
        </Heading>
        <WrappedFontAwesomeIcon icon={faBluetooth} color={'white'} size={16} />
        <ConnectionIcon />
      </HStack>
    </TouchableOpacity>
  );
};

export default HeaderConnectivityBadge;
