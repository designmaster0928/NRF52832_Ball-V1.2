import React from 'react';
import {
  Dimensions,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Box, Image, useSafeArea } from 'native-base';

interface Props {
  src?: string;
  height?: string | number | Array<string | number>;
  layout?: 'modal' | 'bottomOnly';
  source?: ImageSourcePropType;
}

const dimensions = Dimensions.get('window');
const windowWidth = Math.floor(dimensions.width);

export function ImageGradientBackground(props: Props): JSX.Element {
  const { height = 300, layout, src } = props;

  const imageProps: ImageProps = {
    source: props.source,
  };

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  return (
    <Box w={windowWidth} h={height} position={'absolute'}>
      {layout !== 'bottomOnly' && (
        <Box bg={'black'} {...safeAreaProps} height={0} />
      )}
      <Box>
        <Image
          h={'100%'}
          alt={'Alt'}
          resizeMode={'cover'}
          w={windowWidth}
          {...imageProps}
        />
        {(!layout || layout === 'modal') && (
          <>
            <LinearGradient
              colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
              style={styles.imageGradientTop}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(66, 63, 66, 1)']}
              style={styles.imageGradientBottom}
            />
          </>
        )}
        {layout === 'bottomOnly' && (
          <>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.imageGradientBottom}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  imageGradientBottom: {
    bottom: 0,
    height: '30%',
    position: 'absolute',
    width: windowWidth,
  },
  imageGradientTop: {
    height: 108,
    position: 'absolute',
    top: 0,
    width: windowWidth,
  },
});

export default ImageGradientBackground;
