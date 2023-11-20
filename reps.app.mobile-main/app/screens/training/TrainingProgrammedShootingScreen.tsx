import React, { FC, useEffect, useState } from 'react';
import { Box, Flex } from 'native-base';

import WorkoutControlButtons from 'components/activity/WorkoutControlButtons';
import { TwoToneHeader } from 'components/headers/TwoToneHeader';
import { ImageGradientBackground } from 'components/images/ImageGradientBackground';
import ShootingTracker from 'components/page-specific/training/ShootingTracker';
import { TrainingNavigation } from 'enums/navigation.enum';
import { WorkoutFreestyleTypes } from 'enums/workout.enum';

let interval: NodeJS.Timer | null;

const TrainingProgrammedShootingScreen: FC = (): JSX.Element => {
  const duration: number = 1200;
  const [isShooting, setIsShooting] = useState(true);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState(0);

  function initializeTime(): void {
    if (!interval && isShooting) {
      interval = setInterval(() => {
        setCurrentTimeSeconds((currentValue: number) => {
          if (interval && currentValue >= duration) {
            clearInterval(interval);
          }

          return currentValue + 1;
        });
      }, 1000);
    }
  }

  useEffect(() => {
    if (isShooting) {
      initializeTime();
    } else {
      if (interval) {
        clearInterval(interval);
      }

      interval = null;
    }
  }, [isShooting]);

  return (
    <>
      <Flex flex={1} bg={'backgroundGray.400'}>
        <ImageGradientBackground height={'45%'} />
        <Flex p={8} pt={16} flexGrow={1}>
          <TwoToneHeader title={'Wall Ball'} secondaryTitle={'Daily Tune Up'} />

          <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
            <ShootingTracker
              durationSeconds={duration}
              currentTimeSeconds={currentTimeSeconds}
              stats={[
                {
                  stat: 26,
                  title: '# of Reps',
                },
              ]}
            />
          </Box>

          <WorkoutControlButtons
            nextScreen={
              TrainingNavigation.TrainingProgrammedWorkoutCompleteScreen
            }
            nextScreenPayload={{ type: WorkoutFreestyleTypes.Shooting }}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default TrainingProgrammedShootingScreen;
