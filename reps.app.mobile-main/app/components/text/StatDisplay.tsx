/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Center, Text, VStack } from 'native-base';

import { randomIntFromInterval } from 'helpers/random.helper';

import StatWithPrecision from './StatWithPrecision';

interface Props {
  stat: number;
  title: string;
  fontSize?: number;
  precision?: number;
}

const isDemoMode: boolean = false;

export function StatDisplay(props: Props): JSX.Element {
  const { fontSize, precision, stat, title } = props;

  const [animateToNumber, setAnimateToNumber] = React.useState(0);

  let demoModeInterval: NodeJS.Timer;

  useEffect(() => {
    setTimeout(() => {
      setAnimateToNumber(Number(stat));
    }, Math.floor(Math.random() * 500));

    if (!demoModeInterval && isDemoMode) {
      demoModeInterval = setInterval(() => {
        setAnimateToNumber(Math.floor(Math.random() * Number(stat)));
      }, randomIntFromInterval(3000, 5000));
    }

    return () => {
      clearInterval(demoModeInterval);
    };
  }, []);

  useEffect(() => {
    setAnimateToNumber(Number(stat));
  }, [stat]);

  return (
    <VStack>
      <Center>
        <Text fontWeight={'normal'} fontSize={16} textAlign={'center'}>
          {title}
        </Text>
      </Center>
      <Center mt={-3}>
        <StatWithPrecision
          animateToNumber={animateToNumber}
          fontSize={fontSize}
          precision={precision}
        />
      </Center>
    </VStack>
  );
}

const styles = StyleSheet.create({
  animatedNumbers: {
    color: 'white',
    fontSize: 64,
    fontWeight: '600',
  },
});
