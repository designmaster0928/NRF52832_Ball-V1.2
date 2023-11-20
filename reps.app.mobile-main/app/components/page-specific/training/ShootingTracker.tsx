import React, { FC } from 'react';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Flex, HStack, IconButton, VStack } from 'native-base';

import PlayProgress from 'components/stats/PlayProgress';
import TimerStat from 'components/stats/TimerStat';
import { StatDisplay } from 'components/text/StatDisplay';
import { convertMillisecondsToFormattedTime } from 'helpers/time.helper';
import { BallSessionStats } from 'models/session.model';

interface StatsItem {
  title: string;
  stat: number;
}

interface Props {
  currentTimeSeconds?: number;
  durationSeconds?: number;
  handlePressShowLog?: () => void;
  session?: BallSessionStats;
  shouldShowLogButton?: boolean;
  stats?: Array<StatsItem>;
}

const ShootingTracker: FC<Props> = ({
  durationSeconds,
  handlePressShowLog,
  currentTimeSeconds,
  shouldShowLogButton,
  stats,
}): JSX.Element => {
  const statsLength: number = stats?.length || 0;

  return (
    <VStack>
      <HStack alignItems={'center'}>
        {shouldShowLogButton ? (
          <IconButton
            onPress={(): void => handlePressShowLog && handlePressShowLog()}
            icon={<FontAwesomeIcon icon={faList} color={'white'} size={24} />}
            _pressed={{
              bg: 'secondary.400',
            }}
          />
        ) : (
          <></>
        )}
        <Flex flex={1}>
          <>
            {durationSeconds !== undefined &&
            currentTimeSeconds !== undefined ? (
              <PlayProgress
                durationSeconds={durationSeconds}
                currentTimeSeconds={currentTimeSeconds}
              />
            ) : (
              <></>
            )}
            {!durationSeconds && currentTimeSeconds !== undefined ? (
              <TimerStat
                fontSize={shouldShowLogButton ? 48 : 64}
                time={convertMillisecondsToFormattedTime(
                  currentTimeSeconds * 1000,
                )}
              />
            ) : (
              <></>
            )}
          </>
        </Flex>
      </HStack>
      <HStack justifyContent={'space-around'} mt={2}>
        {stats?.map(({ title, stat }: StatsItem, index: number) => {
          return (
            <StatDisplay
              title={title}
              stat={stat}
              key={index}
              precision={0}
              fontSize={statsLength === 1 ? 96 : 64}
            />
          );
        })}
      </HStack>
    </VStack>
  );
};

export default ShootingTracker;
