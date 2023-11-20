/* eslint-disable max-lines-per-function */
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  useSafeArea,
  VStack,
} from 'native-base';

import CircleImageTitleHeader from 'components/headers/CircleImageTitleHeader';
import ImageTitleHeader from 'components/headers/ImageTitleHeader';
import { HorizontalThumbnailList } from 'components/lists/HorizontalThumbnailList';
import IconNumberStat from 'components/stats/IconNumberStat';

import { data as similarContentVideoData } from '../../mocks/training-strength-similar-content.mock';

const TrainingStrengthItemScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  return (
    <Flex flex={1}>
      <Box bg={'black'} {...safeAreaProps} height={0} />
      <Flex>
        <Image
          alt={'TODO: Placeholder'}
          style={{ aspectRatio: 419 / 276 }}
          src={`https://picsum.photos/838?${Date.now()}`}
          bg={'gray.600'}
        />
        <Box position={'absolute'} top={0} right={0} bottom={0} left={0}>
          <VStack flex={1}>
            <HStack w={'100%'} mt={4}>
              <Box flex={1} ml={4}>
                <TouchableOpacity onPress={(): void => navigation.goBack()}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size={24}
                    style={styles.whiteIcon}
                  />
                </TouchableOpacity>
              </Box>

              <Box mr={4}>
                <TouchableOpacity>
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    size={24}
                    style={styles.whiteIcon}
                  />
                </TouchableOpacity>
              </Box>
            </HStack>

            <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  color={'white'}
                  size={64}
                  style={styles.whiteIcon}
                />
              </TouchableOpacity>
            </Flex>
          </VStack>
        </Box>
      </Flex>
      <ScrollView flex={1} p={6} pt={4}>
        <ImageTitleHeader
          shouldShowShareButton={true}
          subtitle={'15m July 7. 2022'}
          title={'Str & Con 10 Minute Core'}
        />
        <Text fontWeight={600} fontSize={12} lineHeight={18} mt={6}>
          Essential workout...
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
        <Divider />
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
            Similar to this content
          </Heading>
        </Box>

        <HorizontalThumbnailList data={similarContentVideoData} />
      </ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  whiteIcon: {
    color: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
  },
});

export default TrainingStrengthItemScreen;
