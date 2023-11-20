import React, { memo, useEffect, useMemo, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FlatList, Heading, HStack, IconButton, Text, View } from 'native-base';

import { convertMillisecondsToFormattedTime } from 'helpers/time.helper';
import { TrainingFreestyleShots } from 'models/training.model';
import { UserStats } from 'models/user-stats.model';

import BottomDrawer from './BottomDrawer';

type HandleRemoveShot = (id: string) => void;

interface Props {
  handleDrawerClose?: () => void;
  handleRemoveShot: HandleRemoveShot;
  isOpen: boolean;
  data: Array<UserStats | null | undefined>;
}

const itemHeight = 42;

function getItemLayout(
  _data: unknown,
  index: number,
): {
  index: number;
  length: number;
  offset: number;
} {
  return {
    index,
    length: itemHeight,
    offset: itemHeight * index,
  };
}

function DeleteButton({
  handleRemoveShot,
  id,
}: {
  handleRemoveShot: HandleRemoveShot;
  id: string;
}): JSX.Element {
  return (
    <IconButton
      // Add delete later when we actually have backing data.
      onPress={(): void => handleRemoveShot(id)}
      icon={<FontAwesomeIcon icon={faClose} color={'black'} size={24} />}
      _pressed={{
        bg: 'secondary.400',
      }}
    />
  );
}

function Row({
  index,
  item,
  handleRemoveShot,
  length,
}: {
  index: number;
  item: UserStats;
  handleRemoveShot: HandleRemoveShot;
  length: number;
}): JSX.Element {
  const elapsedTime = useMemo(() => {
    return String(convertMillisecondsToFormattedTime(item.elapsedTime * 1000));
  }, [item.elapsedTime]);

  return (
    <HStack alignItems={'center'} h={itemHeight}>
      <Text color={'#423F42'} fontSize={16} fontWeight={400}>
        {length - index}
      </Text>

      <Text color={'#423F42'} fontSize={16} fontWeight={700} ml={6}>
        {item.speed}
        <Text fontSize={10} fontWeight={700}>
          mph
        </Text>
      </Text>
      <Text
        color={'#423F42'}
        fontSize={16}
        fontWeight={300}
        flex={1}
        textAlign={'right'}
        mr={8}
      >
        {elapsedTime}
      </Text>
      <DeleteButton id={item.statId} handleRemoveShot={handleRemoveShot} />
    </HStack>
  );
}
const MemoRow = memo(Row);

export function ShotsTrackerDrawer(props: Props): JSX.Element {
  const { data, handleDrawerClose, handleRemoveShot, isOpen } = props;

  const dataLength = data.length;

  const [isOpenInternal, setIsOpenInternal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpenInternal(true);
      }, 0);
    } else {
      setTimeout(() => {
        setIsOpenInternal(false);
      }, 0);
    }
  }, [isOpen]);

  const reversedData = useMemo(() => {
    return data.reverse();
  }, [data]);

  return (
    <BottomDrawer handleDrawerClose={handleDrawerClose} isOpen={isOpenInternal}>
      <>
        <Heading color={'black'} fontSize={20} fontWeight={700}>
          My Shots
        </Heading>
        {isOpenInternal && dataLength ? (
          <FlatList
            data={reversedData}
            getItemLayout={getItemLayout}
            initialNumToRender={16} // Reduce initial render amount
            keyExtractor={(item): string => String(item?.statId)}
            maxToRenderPerBatch={10} // Reduce number in each render batch
            mt={4}
            renderItem={({ item, index }): JSX.Element => {
              if (!item) {
                return <></>;
              }

              return (
                <MemoRow
                  index={index}
                  item={item}
                  length={dataLength}
                  handleRemoveShot={handleRemoveShot}
                />
              );
            }}
            removeClippedSubviews={true} // Unmount components when outside of window
          />
        ) : (
          <></>
        )}
      </>
    </BottomDrawer>
  );
}
