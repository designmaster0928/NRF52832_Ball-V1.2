import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { MotiView } from 'moti';
import { v4 } from 'uuid';

const Pulse = ({ duration = 2000 }: { duration: number }): JSX.Element => {
  const [pulseArray, setPulseArray] = useState<Array<string>>([]);
  const lastTimeout = useRef<NodeJS.Timeout | null>();
  const count = useRef<number>(0);

  const createTimeout = useCallback(() => {
    if (!lastTimeout.current) {
      setPulseArray((prevState: Array<string>) => {
        return [
          ...prevState.slice(-10),
          `${count.current}-${duration}-${v4()}`,
        ];
      });

      lastTimeout.current = setTimeout(() => {
        createTimeout();
      }, duration);
    } else {
      clearTimeout(lastTimeout.current);
      lastTimeout.current = null;

      createTimeout();
    }
  }, [duration]);

  useEffect(() => {
    count.current = count.current + 1;
    createTimeout();

    return () => {
      if (lastTimeout.current) {
        clearTimeout(lastTimeout.current);
      }
    };
  }, [duration]);

  return (
    <>
      {/* <PulseCircle
        key={index + duration}
        delay={(duration / index) * index}
        duration={duration}
      /> */}
      {pulseArray?.map((item, index, array) => {
        return (
          <PulseCircle
            key={item}
            delay={(duration / array.length) * index}
            duration={duration}
          />
        );
      })}
    </>
  );
};

const PulseCircle = ({
  delay,
  duration,
}: {
  delay: number;
  duration: number;
}): JSX.Element => {
  return (
    <MotiView
      from={{ opacity: 0.7, scale: 1 }}
      animate={{ opacity: 0, scale: 4 }}
      transition={{
        delay: delay,
        duration: duration,
        easing: Easing.out(Easing.ease),
        loop: false,
        repeatReverse: false,
        type: 'timing',
      }}
      onDidAnimate={(): void => {
        // console.log('WTF!');
      }}
      style={styles.circle}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    borderColor: '#ffffff',
    borderRadius: 150,
    borderWidth: 1,
    height: 90,
    position: 'absolute',
    width: 90,
  },
});

export default Pulse;
