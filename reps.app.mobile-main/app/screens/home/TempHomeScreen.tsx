/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Box,
  Column,
  Flex,
  Heading,
  Image,
  Row,
  ScrollView,
} from 'native-base';

const dimensions = Dimensions.get('window');
const windowWidth = Math.floor(dimensions.width);
const windowHeight = Math.floor(dimensions.height);
const backgroundGradientHeight = Math.floor(dimensions.height * 0.7);

const proportionalBallHeight = Math.floor(dimensions.height * 0.25);

import Logo from '../../assets/brand/Logo.svg';

const TempHomeScreen = (): JSX.Element => {
  return (
    <Flex flex={1}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
        style={styles.backgroundGradientTop}
      />
      <ScrollView flex={1}>
        <Box safeArea />
        <Column justifyContent={'center'} alignItems={'center'}>
          <Logo height={100} style={{ aspectRatio: 188 / 44 }} />
          <Heading fontSize={[30, 40]} fontWeight={800} mt={2}>
            R1 Smart Ball
          </Heading>

          <Heading fontSize={12} fontWeight={600} mt={2}>
            Upgrade your training.
          </Heading>

          <Box
            my={6}
            h={`${proportionalBallHeight}px`}
            w={`${proportionalBallHeight}px`}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'hidden'}
          >
            <Image
              alt={'temp image'}
              source={require('../../assets/brand/temp-home/r-1-smart-ball-2.png')}
              resizeMode={'cover'}
              w={`${proportionalBallHeight}px`}
              h={`${proportionalBallHeight}px`}
            />
          </Box>

          <Column w={'80%'}>
            <Row mt={[0, 8]}>
              <Image
                alt={'temp image'}
                source={require('../../assets/brand/temp-home/icon-fire.png')}
                w={[6, 7]}
                h={[6, 7]}
                resizeMode={'contain'}
              />
              <Heading w={'80%'} fontSize={[10, 14]} fontWeight={400} ml={4}>
                Record how fast you can throw the ball
              </Heading>
            </Row>
            <Row mt={[4, 8]}>
              <Image
                alt={'temp image'}
                source={require('../../assets/brand/temp-home/icon-wall.png')}
                w={[6, 7]}
                h={[6, 7]}
                resizeMode={'contain'}
              />
              <Heading w={'80%'} fontSize={[10, 14]} fontWeight={400} ml={4}>
                Collect wall ball repetitions during workouts
              </Heading>
            </Row>
            <Row mt={[4, 8]}>
              <Image
                alt={'temp image'}
                source={require('../../assets/brand/temp-home/icon-watch.png')}
                w={[6, 7]}
                h={[6, 7]}
                resizeMode={'contain'}
              />
              <Heading w={'80%'} fontSize={[10, 14]} fontWeight={400} ml={4}>
                Get live data delivered straight to your smart watch
              </Heading>
            </Row>
            <Row mt={[4, 8]}>
              <Image
                alt={'temp image'}
                source={require('../../assets/brand/temp-home/icon-trending.png')}
                w={[6, 7]}
                h={[6, 7]}
                resizeMode={'contain'}
              />
              <Heading w={'80%'} fontSize={[10, 14]} fontWeight={400} ml={4}>
                Compare stats & compete with friends straight from the app
              </Heading>
            </Row>
          </Column>
        </Column>
      </ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  backgroundGradientTop: {
    height: backgroundGradientHeight,
    position: 'absolute',
    top: 0,
    width: windowWidth,
  },
});

export default TempHomeScreen;
