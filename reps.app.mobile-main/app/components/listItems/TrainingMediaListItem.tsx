import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Image, Text, VStack } from 'native-base';

import { TrainingNavigation } from 'enums/navigation.enum';
import { TrainingMediaListDataItem } from 'models/list.model';
import { StackNavigationProp } from 'models/navigation.model';

interface Props {
  item: TrainingMediaListDataItem;
}

const TrainingMediaListItem: FC<Props> = ({ item }): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  const { duration, genre, imageSource, personality, title } = item;

  return (
    <TouchableOpacity
      onPress={(): void => {
        navigation.navigate(TrainingNavigation.TrainingPreLobbyScreen);
      }}
    >
      <HStack h={42} mx={2} mb={4} alignItems={'center'}>
        <Image
          alt={title || ''}
          borderRadius={10}
          h={42}
          src={imageSource}
          w={42}
          bg={'gray.600'}
        />
        <VStack ml={4} w={'40%'}>
          <Text fontWeight={600} fontSize={13} lineHeight={17}>
            {title}
          </Text>
          <Text fontWeight={400} fontSize={11} lineHeight={14}>
            {personality}
          </Text>
        </VStack>
        <Text fontWeight={400} fontSize={11} lineHeight={14} flex={1} ml={2}>
          {genre}
        </Text>
        <Text>{duration}m</Text>
        <IconButton
          onPress={(): void => console.log('We don\t know what this does yet')}
          w={8}
          p={2}
          ml={2}
          icon={
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              color={'white'}
              size={16}
            />
          }
          _pressed={{
            bg: 'secondary.400:alpha.50',
          }}
        />
      </HStack>
    </TouchableOpacity>
  );
};

export default TrainingMediaListItem;
