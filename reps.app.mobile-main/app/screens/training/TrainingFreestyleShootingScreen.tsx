/* eslint-disable max-lines-per-function */
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, Flex, Heading } from 'native-base';

import WorkoutControlButtons from 'components/activity/WorkoutControlButtons';
import { SelectLarge } from 'components/forms/SelectLarge';
import TransparentHeader from 'components/headers/TransparentHeader';
import { TwoToneHeader } from 'components/headers/TwoToneHeader';
import { ImageGradientBackground } from 'components/images/ImageGradientBackground';
import ShootingTracker from 'components/page-specific/training/ShootingTracker';
import { localImages } from 'config/images.config';
import { TrainingNavigation } from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { StackNavigationProp } from 'models/navigation.model';
import { StatHand } from 'models/user-stats.model';

import { useBallSession } from '../../hooks/useBallSession.hook';
import { useHandleBackButton } from '../../hooks/useHandleBackButton.hook';
import { useShouldScan } from '../../hooks/useShouldScan.hook';
import { useStoreBallSession } from '../../hooks/useStoreBallSession.hook';
import { useTimer } from '../../hooks/useTimer.hook';

interface StepSelectionHandProps {
  setThrowingHand: (hand: StatHand) => void;
  throwingHand?: StatHand;
}

const TrackingWrapper: FC<{
  throwingHand: StatHand | undefined;
}> = ({ throwingHand }): JSX.Element => {
  const [isPaused, setIsPaused] = useState(true);

  const navigation = useNavigation<StackNavigationProp>();
  useShouldScan(navigation);

  const [timer, getCurrentTime, startTimer, pauseTimer] = useTimer();

  const session = useBallSession(
    throwingHand,
    WorkoutFreestyleTypes.Shooting,
    getCurrentTime,
  );

  const [disableBackHandler] = useHandleBackButton();

  useStoreBallSession({ getCurrentTime, session });

  useEffect(() => {
    if (isPaused) {
      pauseTimer();
    } else {
      startTimer();
    }
  }, [isPaused]);

  useEffect(() => {
    if (session.throws > 0) {
      setIsPaused(false);
    }
  }, [session.throws]);

  return (
    <>
      <ShootingTracker
        shouldShowLogButton={true}
        currentTimeSeconds={timer || 0}
        handlePressShowLog={(): void => {
          navigation.navigate(
            TrainingNavigation.TrainingFreestyleShootingLogScreen,
            { sessionId: session.sessionId },
          );
        }}
        session={session}
        stats={[
          {
            stat: session.throws,
            title: '# of Shots',
          },
          {
            stat: session.lastThrowSpeed,
            title: 'Last Shot',
          },
          {
            stat: session.averageSpeed,
            title: 'Avg. Speed',
          },
        ]}
      />
      <WorkoutControlButtons
        isPaused={isPaused}
        handleTogglePause={(): void => {
          setIsPaused((currentValue: boolean) => !currentValue);
        }}
        nextScreen={TrainingNavigation.TrainingFreestyleWorkoutCompleteScreen}
        nextScreenPayload={{
          sessionId: session.sessionId,
          type: WorkoutFreestyleTypes.Shooting,
        }}
        handleFinish={(): void => {
          disableBackHandler();
        }}
      />
    </>
  );
};

const StepSelectHand: FC<PropsWithChildren<StepSelectionHandProps>> = ({
  children,
  setThrowingHand,
  throwingHand,
}): JSX.Element => {
  return (
    <>
      <SelectLarge
        options={['Right', 'Left', 'Mixed']}
        title={'Choose a throwing hand'}
        handleValueChange={(value: StatHand): void => {
          setThrowingHand(value);
        }}
      />
      <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
        {!throwingHand && (
          <Center justifyContent={'flex-end'}>
            <Heading fontSize={20} fontStyle={'italic'} fontWeight={700}>
              Select a throwing hand to begin!
            </Heading>
          </Center>
        )}

        {throwingHand && children}
      </Box>
    </>
  );
};

export function TrainingFreestyleShootingScreen(): JSX.Element {
  const [throwingHand, setThrowingHand] = useState<StatHand>();

  return (
    <>
      <Flex flex={1} bg={'backgroundGray.400'}>
        <ImageGradientBackground
          height={['30%', '45%']}
          source={localImages.shootingFreestyle}
        />
        <Flex height={'100%'} justifyContent={'flex-end'}>
          <Flex
            p={8}
            bottom={0}
            height={['70%', '53%']}
            justifyContent={'center'}
            pb={12}
          >
            <TwoToneHeader title={'Shooting'} secondaryTitle={'Freestyle'} />
            <StepSelectHand
              setThrowingHand={setThrowingHand}
              throwingHand={throwingHand}
            >
              <Flex flex={1} justifyContent={'center'}>
                <TrackingWrapper throwingHand={throwingHand} />
              </Flex>
            </StepSelectHand>
          </Flex>
        </Flex>

        <TransparentHeader canGoBack={true} />
      </Flex>
    </>
  );
}
