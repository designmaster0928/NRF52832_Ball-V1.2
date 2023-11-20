import React from 'react';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Avatar, Box, HStack, Text, VStack } from 'native-base';

import { ActivityListData, ActivityListDataItem } from 'models/list.model';

import { WrappedFontAwesomeIcon } from '../WrappedFontAwesomeIcon';

interface Props {
  data?: ActivityListData;
}

export function ActivityList(props: Props): JSX.Element {
  const { data } = props;

  return (
    <VStack>
      {data?.map((item: ActivityListDataItem) => (
        <HStack space={3} pb={3} key={item.id}>
          <Avatar
            size={'md'}
            bg="gray.300"
            source={{
              uri: item.thumbnail,
            }}
          >
            <WrappedFontAwesomeIcon
              icon={faUser}
              color={'backgroundGray.400'}
            />
          </Avatar>

          <Box flex={1}>
            <Text>{item.description}</Text>
          </Box>

          <WrappedFontAwesomeIcon icon={faThumbsUp} color={'white'} />
        </HStack>
      ))}
    </VStack>
  );
}
