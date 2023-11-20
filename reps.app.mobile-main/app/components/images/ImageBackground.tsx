import React, { FC } from 'react';
import { Dimensions, ImageSourcePropType } from 'react-native';
import { Box, Image } from 'native-base';

interface Props {
  src?: string;
  source?: ImageSourcePropType;
  height?: string | number;
  layout?: 'modal' | 'bottomOnly';
}

const dimensions = Dimensions.get('window');
const windowHeight = Math.floor(dimensions.height * 0.6);
const windowWidth = Math.floor(dimensions.width);

const ImageBackground: FC<Props> = (props: Props): JSX.Element => {
  return (
    <Box w={windowWidth} h={windowHeight} position={'absolute'}>
      <Image h={'100%'} alt={'Alt'} resizeMode={'cover'} {...props} />
    </Box>
  );
};

export default ImageBackground;
