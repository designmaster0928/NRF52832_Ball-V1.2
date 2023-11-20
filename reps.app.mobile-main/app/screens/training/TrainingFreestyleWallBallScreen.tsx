import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Flex } from 'native-base';

import WorkoutControlButtons from 'components/activity/WorkoutControlButtons';
import TransparentHeader from 'components/headers/TransparentHeader';
import { TwoToneHeader } from 'components/headers/TwoToneHeader';
import { ImageGradientBackground } from 'components/images/ImageGradientBackground';
import ShootingTracker from 'components/page-specific/training/ShootingTracker';
import { localImages } from 'config/images.config';
import { TrainingNavigation } from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { useBallSession } from '../../hooks/useBallSession.hook';
import { useHandleBackButton } from '../../hooks/useHandleBackButton.hook';
import { useShouldScan } from '../../hooks/useShouldScan.hook';
import { useStoreBallSession } from '../../hooks/useStoreBallSession.hook';
import { useTimer } from '../../hooks/useTimer.hook';

// eslint-disable-next-line max-lines-per-function
const TrainingFreestyleWallBallScreen: FC = (): JSX.Element => {
  const [isPaused, setIsPaused] = useState(true);

  const navigation = useNavigation<StackNavigationProp>();
  useShouldScan(navigation);

  const [timer, getCurrentTime, startTimer, pauseTimer] = useTimer();

  const session = useBallSession(
    'unknown',
    WorkoutFreestyleTypes.WallBall,
    getCurrentTime,
  );

  const [disableBackHandler, initializeBackHandler] = useHandleBackButton(true);

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
      initializeBackHandler();
    }
  }, [session.throws]);

  return (
    <>
      <Flex flex={1} bg={'backgroundGray.400'}>
        <ImageGradientBackground
          height={['30%', '45%']}
          source={localImages.wallBallFreestyle}
        />
        {/* {navigation.isFocused() ? <BackButtonFloating /> : <></>} */}

        <Flex height={'100%'} justifyContent={'flex-end'}>
          <Flex
            p={8}
            bottom={0}
            height={['70%', '53%']}
            justifyContent={'center'}
            pb={12}
          >
            <TwoToneHeader title={'Shooting'} secondaryTitle={'Freestyle'} />
            <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
              <ShootingTracker
                currentTimeSeconds={timer || 0}
                handlePressShowLog={(): void => {
                  navigation.navigate(
                    TrainingNavigation.TrainingFreestyleShootingLogScreen,
                  );
                }}
                shouldShowLogButton={false}
                stats={[
                  {
                    stat: session.throws,
                    title: '# of Reps',
                  },
                ]}
              />
            </Box>

            <WorkoutControlButtons
              isPaused={isPaused}
              handleTogglePause={(): void => {
                setIsPaused((currentValue: boolean) => !currentValue);
              }}
              nextScreen={
                TrainingNavigation.TrainingFreestyleWorkoutCompleteScreen
              }
              nextScreenPayload={{
                sessionId: session.sessionId,
                type: WorkoutFreestyleTypes.WallBall,
              }}
              handleFinish={(): void => {
                disableBackHandler();
              }}
            />
          </Flex>
        </Flex>

        <Flex p={8} flexGrow={1} mt={'100%'}>
          <TwoToneHeader title={'Wall Ball'} secondaryTitle={'Freestyle'} />

          <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
            <ShootingTracker
              currentTimeSeconds={timer || 0}
              handlePressShowLog={(): void => {
                navigation.navigate(
                  TrainingNavigation.TrainingFreestyleShootingLogScreen,
                );
              }}
              shouldShowLogButton={false}
              stats={[
                {
                  stat: session.throws,
                  title: '# of Reps',
                },
              ]}
            />
          </Box>
        </Flex>
        <TransparentHeader canGoBack={true} />
      </Flex>
    </>
  );
};

export default TrainingFreestyleWallBallScreen;
