import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Box, Heading, IBoxProps } from 'native-base';

interface Props extends PropsWithChildren {
  containerProps?: IBoxProps;
  title?: string;
}

const AnalyticsWrapper: FC<Props> = ({
  children,
  containerProps,
  title,
}): JSX.Element => {
  return (
    <Box mt={8} {...containerProps}>
      <Box mt={6}>
        <LinearGradient
          colors={['#25A3B8', 'rgba(37, 163, 184, 0.25)']}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={styles.gradient}
        />
        <Box bg={'black'} w={'70%'} px={4} py={3} mt={-6}>
          <Heading fontWeight={700} fontSize={16} lineHeight={22}>
            {title}
          </Heading>
        </Box>
        <Box p={4}>{children}</Box>
      </Box>
      <Box
        position={'absolute'}
        top={0}
        left={0}
        bottom={0}
        right={0}
        background={'transparent'}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  gradient: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default AnalyticsWrapper;
