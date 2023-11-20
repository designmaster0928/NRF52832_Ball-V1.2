import React, { FC } from 'react';
import { SectionListData } from 'react-native';
import { HStack, Text } from 'native-base';

import { RoundImageTitleListDataItem } from 'models/list.model';

const TeammateSectionHeader: FC<
  SectionListData<RoundImageTitleListDataItem>
> = ({ section }): JSX.Element => {
  if (!section || !section?.title) {
    return <></>;
  }

  const { title, Button } = section?.title;

  return (
    <HStack
      bg={'muted.500'}
      width={'100%'}
      p={4}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Text fontWeight={400} fontSize={14} lineHeight={20}>
        {title}
      </Text>
      {Button && Button}
    </HStack>
  );
};

export default TeammateSectionHeader;
