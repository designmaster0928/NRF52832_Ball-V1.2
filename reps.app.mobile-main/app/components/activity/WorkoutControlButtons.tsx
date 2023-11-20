import React, { FC, useState } from 'react';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons/faFlagCheckered';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Center, HStack, IconButton } from 'native-base';

import { TrainingNavigation } from 'enums/navigation.enum';
import { handleAlertConfirm } from 'helpers/alert.helper';
import { StackNavigationProp } from 'models/navigation.model';

interface Props {
  isPaused?: boolean;
  handleFinish?: () => void;
  handleTogglePause?: () => void;
  nextScreen?: TrainingNavigation;
  nextScreenPayload?: Record<string, any>;
}

const WorkoutControlButtons: FC<Props> = ({
  isPaused,
  handleFinish,
  handleTogglePause,
  nextScreen,
  nextScreenPayload,
}): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Center mt={4}>
      <HStack>
        <IconButton
          onPress={(): void => {
            if (handleTogglePause) {
              handleTogglePause();
            }
          }}
          w={135}
          icon={
            <FontAwesomeIcon
              icon={isPaused ? faPlay : faPause}
              color={'black'}
              size={36}
            />
          }
          bg={'secondary.400'}
          _pressed={{
            bg: 'secondary.700',
          }}
        />
        <IconButton
          bg={'primary.400'}
          icon={
            <FontAwesomeIcon icon={faFlagCheckered} color={'white'} size={36} />
          }
          ml={4}
          onPress={(): void => {
            handleAlertConfirm({
              onConfirm: (): void => {
                if (handleFinish) {
                  handleFinish();
                }

                navigation.goBack();

                if (nextScreen) {
                  navigation.navigate(nextScreen, nextScreenPayload || {});
                }
              },
            });
          }}
          w={135}
          _pressed={{
            bg: 'primary.700',
          }}
        />
      </HStack>
    </Center>
  );
};

export default WorkoutControlButtons;
