/* eslint-disable max-lines-per-function */
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  ScrollView,
  Text,
} from 'native-base';

import RevealContentContainer from 'components/containers/RevealContentContainer';
import CircleImageTitleHeader from 'components/headers/CircleImageTitleHeader';
import ImageTitleHeader from 'components/headers/ImageTitleHeader';
import { MainHeader } from 'components/headers/MainHeader';
import { HorizontalThumbnailList } from 'components/lists/HorizontalThumbnailList';
import IconNumberStat from 'components/stats/IconNumberStat';
import { RootNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';

import { data as usedInThisVideoData } from '../../mocks/training-daily-tuneup-used-videos.mock';

const TrainingPreLobbyScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp>();
  return (
    <Flex flex={1}>
      <MainHeader title={'Wall Ball'} canGoBack={true} />
      <ScrollView flex={1} p={6} pt={8}>
        <ImageTitleHeader
          imageSource={'https://picsum.photos/50'}
          shouldShowShareButton={true}
          subtitle={'15m July 7. 2022'}
          title={'Daily Tune Up'}
        />
        <Text fontWeight={600} fontSize={12} lineHeight={18} mt={6}>
          A fifteen minute workout to keep your stick dialed in!
        </Text>
        <HStack my={5}>
          <IconNumberStat
            icon={faMountain}
            stat={'8/10'}
            title={'Difficulty'}
          />
          <IconNumberStat
            icon={faStar}
            stat={'7.7/10'}
            title={'Rating'}
            containerProps={{ ml: 8 }}
          />
        </HStack>
        <RevealContentContainer
          hiddenContent={
            <Text fontWeight={600} fontSize={12} lineHeight={18}>
              Devil Eyes - Hippie Sabotage {'\n'}
              Sweet Dreams - Alan Walker, Imanbek{'\n'}
              Wow. - Post Malone {'\n'}
              No Sleep - Wiz Khalifa {'\n'}
              Genius - Sia, Diplo, Labrinth, LSD, Lil Wayne {'\n'}
              Monter - Meek Mill Hate It Or Love It{'\n'}
              (Remix) - 50 Cent, The Game, Tony Yayo, Young Buck, Lloyd Banks
              {'\n'}
            </Text>
          }
          icon={faMusic}
          title={'Playlist'}
        />
        <Box mt={4}>
          <CircleImageTitleHeader
            imageSource={'https://picsum.photos/43'}
            superTitle={'Trainer'}
            title={'Luke Cometti'}
          />
        </Box>
        <Divider mt={4} />
        <Box>
          <Heading
            color={'white'}
            fontSize={12}
            fontWeight={600}
            lineHeight={16}
            pt={4}
            pb={1}
          >
            Used in this coaching audio
          </Heading>
        </Box>

        <HorizontalThumbnailList data={usedInThisVideoData} />
      </ScrollView>
      <TouchableOpacity
        onPress={(): void =>
          navigation.navigate(RootNavigation.TrainingProgrammedShootingScreen)
        }
      >
        <HStack
          bg={'black'}
          justifyContent={'center'}
          py={6}
          alignItems={'center'}
        >
          <FontAwesomeIcon icon={faPlay} color={'#25A3B8'} size={36} />
          <Heading fontWeight={700} fontSize={20} lineHeight={27} ml={6}>
            Begin Workout
          </Heading>
        </HStack>
      </TouchableOpacity>
    </Flex>
  );
};

export default TrainingPreLobbyScreen;
