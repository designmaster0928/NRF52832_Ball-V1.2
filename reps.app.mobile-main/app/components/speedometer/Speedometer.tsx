/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
import React, { FC, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { calculateDegreeFromLabels } from 'helpers/math/calculate-degree-from-labels.helper';
import { calculateLabelFromValue } from 'helpers/math/calculate-label-from-value.helper';
import limitValue from 'helpers/math/limit-value.helper';
import { validateSize } from 'helpers/math/validate-size.helper';
import { SpeedometerProps } from 'models/speedometer.model';

const { width } = Dimensions.get('window');

const Speedometer: FC<SpeedometerProps> = (props): JSX.Element => {
  const {
    allowedDecimals = 0,
    easeDuration = 500,
    halfCircleStyle = {},
    imageStyle = {},
    imageWrapperStyle = {},
    innerCircleStyle = {},
    labels = [
      {
        activeBarColor: '#8a3e12',
        labelColor: '#ff2900',
        name: 'Pathetically weak',
      },
      {
        activeBarColor: '#f4610a',
        labelColor: '#ff5400',
        name: 'Very weak',
      },
    ],
    labelNoteStyle = {},
    labelStyle = {},
    labelWrapperStyle = {},
    maxValue = 100,
    minValue = 0,
    needleImage = require('../../assets/misc/speedometer-needle.png'),
    outerCircleStyle = {},
    size = 200,
    topValue = 30,
    useNativeDriver = true,
    value = 50,
    wrapperStyle = {},
  } = props;

  const speedometerValue = useRef(new Animated.Value(minValue)).current;

  const degree = 180;
  const degreeByTopValue = degree / (maxValue / topValue);
  const perLevelDegree = calculateDegreeFromLabels(degree, labels);
  const label = calculateLabelFromValue(
    limitValue(value, minValue, maxValue, allowedDecimals),
    labels,
    minValue,
    maxValue,
  );
  Animated.timing(speedometerValue, {
    duration: easeDuration,
    easing: Easing.linear,
    toValue: limitValue(value, minValue, maxValue, allowedDecimals),
    useNativeDriver,
  }).start();

  const rotate = speedometerValue.interpolate({
    inputRange: [minValue, maxValue],
    outputRange: ['-90deg', '90deg'],
  });

  const currentSize = validateSize(size, width - 20);

  return (
    <View
      style={[
        style.wrapper,
        {
          height: currentSize / 2,
          width: currentSize,
        },
        wrapperStyle,
      ]}
    >
      <View
        style={[
          style.outerCircle,
          {
            borderTopLeftRadius: currentSize / 2,
            borderTopRightRadius: currentSize / 2,
            height: currentSize / 2,
            width: currentSize,
          },
          outerCircleStyle,
        ]}
      >
        {labels.map((level, index) => {
          const circleDegree = 90 + index * degreeByTopValue;
          return (
            <View
              key={level.name}
              style={[
                style.halfCircle,
                {
                  backgroundColor: level.activeBarColor,
                  borderRadius: currentSize / 2,
                  height: currentSize,
                  transform: [
                    {
                      translateX: currentSize / 4,
                    },
                    {
                      rotate: `${circleDegree}deg`,
                    },
                    {
                      translateX: (currentSize / 4) * -1,
                    },
                  ],
                  width: currentSize / 2,
                },
                halfCircleStyle,
              ]}
            />
          );
        })}
        <Animated.View
          style={[
            style.imageWrapper,
            {
              top: -(currentSize / 15),
              transform: [{ rotate }],
            },
            imageWrapperStyle,
          ]}
        >
          <Image
            style={[
              style.image,
              {
                height: currentSize,
                width: currentSize,
              },
              imageStyle,
            ]}
            source={needleImage}
          />
        </Animated.View>
        <View
          style={[
            style.innerCircle,
            {
              borderTopLeftRadius: currentSize / 2,
              borderTopRightRadius: currentSize / 2,
              height: (currentSize / 2) * 0.6,
              width: currentSize * 0.6,
            },
            innerCircleStyle,
          ]}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  // Circular Container
  circleWrapper: {
    overflow: 'hidden',
  },
  halfCircle: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    left: 0,
    position: 'absolute',
    top: 0,
  },
  image: {
    height: width - 20,
    resizeMode: 'stretch',
    width: width - 20,
  },
  imageWrapper: {
    left: 0,
    position: 'absolute',
    zIndex: 10,
  },
  innerCircle: {
    alignItems: 'center',
    backgroundColor: '#423f42',
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
    height: (width / 2) * 0.6,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    top: 1,
    width: width * 0.6,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  labelNote: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelWrapper: {
    alignItems: 'center',
    marginVertical: 5,
  },
  outerCircle: {
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderColor: '#ffffff',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  wrapper: {
    alignSelf: 'center',
    marginVertical: 5,
  },
});

export default Speedometer;
