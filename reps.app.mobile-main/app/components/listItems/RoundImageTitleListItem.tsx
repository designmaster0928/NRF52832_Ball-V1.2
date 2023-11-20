import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Heading, HStack } from 'native-base';

import ActionIconButton from 'components/buttons/ActionIconButton';
import { ProfileNavigation } from 'enums/navigation.enum';
import { RoundImageTitleListDataItem } from 'models/list.model';
import { StackNavigationProp } from 'models/navigation.model';

interface Props {
  item: RoundImageTitleListDataItem;
}

const RoundImageTitleListItem: FC<Props> = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp>();

  const { icon, id, imageSource, name, onPress } = item;
  return (
    <TouchableOpacity
      key={id}
      onPress={(): void => {
        if (onPress) {
          onPress();
        } else {
          navigation.navigate(ProfileNavigation.ProfileTeammateProfileScreen);
        }
      }}
    >
      <HStack
        alignItems={'center'}
        my={3}
        mx={4}
        justifyContent={'space-between'}
        minH={'38px'}
      >
        <HStack alignItems={'center'}>
          {imageSource && (
            <Avatar source={{ uri: imageSource }} size={'38px'} />
          )}
          <Heading fontSize={'16'} fontWeight={700} lineHeight={22} ml={4}>
            {name}
          </Heading>
        </HStack>

        {icon && <ActionIconButton icon={icon} />}
      </HStack>
    </TouchableOpacity>
  );
};

export default RoundImageTitleListItem;
