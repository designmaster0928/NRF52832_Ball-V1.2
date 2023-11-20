import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Box, IconButton, useSafeArea } from 'native-base';

interface Props {
  children?: JSX.Element;
  handleDrawerClose?: () => void;
  isOpen: boolean;
}

const BottomDrawer: FC<Props> = ({ children, handleDrawerClose, isOpen }) => {
  const safeAreaPropsTop = useSafeArea({
    safeAreaTop: true,
  });

  const safeAreaPropsBottom = useSafeArea({
    safeAreaBottom: true,
  });

  return (
    <Box
      position={'absolute'}
      bottom={0}
      right={4}
      left={4}
      top={0}
      {...safeAreaPropsTop}
    >
      <Box alignItems={'flex-start'}>
        <Box
          bg={'black'}
          borderTopRadius={6}
          height={'50px'}
          position="absolute"
          width={'100%'}
        />
        <IconButton
          icon={
            <>
              <FontAwesomeIcon icon={faList} color={'white'} size={24} />
              <FontAwesomeIcon
                icon={faChevronDown}
                color={'white'}
                size={24}
                style={styles.iconDownChevron}
              />
            </>
          }
          ml={2}
          onPress={(): void => {
            if (handleDrawerClose) {
              handleDrawerClose();
            }
          }}
          _pressed={{
            bg: 'secondary.400',
          }}
        />
      </Box>
      <Box
        flex={1}
        p={4}
        bg="white"
        borderTopRadius={6}
        {...safeAreaPropsBottom}
      >
        {children}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  iconDownChevron: {
    marginLeft: 14,
  },
});

export default BottomDrawer;
