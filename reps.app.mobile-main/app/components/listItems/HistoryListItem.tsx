import React, { FC, useCallback } from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Menu, Pressable, Text, VStack } from 'native-base';

import MonthDayStamp from 'components/date/MonthDayStamp';
import StatDisplaySmall from 'components/text/StatDisplaySmall';
import { ProfileNavigation } from 'enums/navigation.enum';
import {
  HistoryListDataItem,
  HistoryListDataItemStats,
} from 'models/list.model';

interface Props {
  item: HistoryListDataItem;
  handleDeleteItem?: (id: string) => void;
}

const StatHorizontalStack: FC<{
  stats: HistoryListDataItemStats | undefined;
}> = ({ stats }): JSX.Element => {
  return (
    <HStack>
      {stats?.map((stat, index) => {
        return <StatDisplaySmall {...stat} key={index} />;
      })}
    </HStack>
  );
};

const HistoryListItem: FC<Props> = ({
  handleDeleteItem,
  item,
}): JSX.Element => {
  const { day, id, month, stats, supTitle, title } = item;

  const navigation = useNavigation<any>();

  const handleOnPressDelete = useCallback((itemId?: string) => {
    if (itemId && typeof handleDeleteItem === 'function') {
      handleDeleteItem(itemId);
    }
  }, []);

  return (
    <Pressable
      onPress={(): void => {
        navigation.navigate(
          ProfileNavigation.ProfileFreestyleWorkoutSummaryScreen,
          { hideNavButtons: true, sessionId: id },
        );
      }}
    >
      <HStack px={4}>
        <MonthDayStamp day={day} isSmall={true} month={month} />
        <VStack justifyContent={'center'} px={4} flex={1}>
          {supTitle && supTitle?.length > 0 && (
            <Text fontSize={10} fontWeight={400} lineHeight={14}>
              {supTitle}
            </Text>
          )}
          <Heading fontSize={14} fontWeight={700} lineHeight={20}>
            {title}
          </Heading>
        </VStack>
        <StatHorizontalStack stats={stats} />
        <Menu
          mr={4}
          trigger={(triggerProps): JSX.Element => {
            return (
              <Pressable
                hitSlop={10}
                accessibilityLabel="More options menu"
                {...triggerProps}
                justifyContent={'center'}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  color={'white'}
                  size={20}
                />
              </Pressable>
            );
          }}
          w="190"
        >
          {/* <Menu.Item>Share</Menu.Item> */}
          <Menu.Item
            onPress={(): void => {
              handleOnPressDelete(id);
            }}
          >
            Delete
          </Menu.Item>
        </Menu>
      </HStack>
    </Pressable>
  );
};

export default HistoryListItem;
