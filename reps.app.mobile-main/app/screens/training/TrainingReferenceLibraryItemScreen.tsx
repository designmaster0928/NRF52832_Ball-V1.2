/* eslint-disable max-lines-per-function */
import React, { FC, useState } from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  ScrollView,
  Text,
} from 'native-base';

import SelectableButton from 'components/buttons/SelectableButton';
import ImageTitleHeader from 'components/headers/ImageTitleHeader';
import { MainHeader } from 'components/headers/MainHeader';

const TrainingReferenceLibraryItemScreen: FC = (): JSX.Element => {
  const [hand, setHand] = useState('left');
  const [gender, setGender] = useState('men');
  const [view, setView] = useState('front');

  return (
    <Flex flex={1}>
      <MainHeader title={'Reference Library'} canGoBack={true} />
      <ScrollView flex={1}>
        <Flex p={4} pt={6}>
          <ImageTitleHeader
            shouldShowShareButton={true}
            subtitle={'15m July 7. 2022'}
            title={'Quick Stick'}
          />
          <Text fontWeight={600} fontSize={12} lineHeight={16} mt={6}>
            When doing this technique be sure to keep your dominant hand X and
            Y. This technique is especially useful for Z situations.
          </Text>
          <Center>
            <Button.Group mt={6}>
              <SelectableButton
                title={'Left'}
                isSelected={hand === 'left'}
                onPress={(): void => setHand('left')}
              />
              <SelectableButton
                title={'Right'}
                isSelected={hand === 'right'}
                onPress={(): void => setHand('right')}
              />
            </Button.Group>
          </Center>
          <Center>
            <Button.Group mt={4}>
              <SelectableButton
                title={"Men's"}
                isSelected={gender === 'men'}
                onPress={(): void => setGender('men')}
              />
              <SelectableButton
                title={"Women's"}
                isSelected={gender === 'women'}
                onPress={(): void => setGender('women')}
              />
            </Button.Group>
          </Center>
          <Center>
            <Button.Group mt={4}>
              <SelectableButton
                title={'Front View'}
                isSelected={view === 'front'}
                onPress={(): void => setView('front')}
              />
              <SelectableButton
                title={'Side View'}
                isSelected={view === 'side'}
                onPress={(): void => setView('side')}
              />
              <SelectableButton
                title={'Back View'}
                isSelected={view === 'back'}
                onPress={(): void => setView('back')}
              />
            </Button.Group>
          </Center>
        </Flex>
        <Flex mt={8}>
          <Image
            alt={'TODO: Placeholder'}
            style={{ aspectRatio: 419 / 237 }}
            src={`https://picsum.photos/838?${Date.now()}`}
            bg={'gray.600'}
          />
          <Box
            position={'absolute'}
            top={0}
            right={0}
            bottom={0}
            left={0}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <IconButton
              icon={
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  color={'white'}
                  size={64}
                />
              }
              _pressed={{
                bg: 'secondary.400',
              }}
            />
          </Box>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default TrainingReferenceLibraryItemScreen;
