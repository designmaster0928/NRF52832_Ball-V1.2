/* eslint-disable max-lines-per-function */
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro';
import { faFire } from '@fortawesome/free-solid-svg-icons/faFire';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  useDisclose,
  VStack,
} from 'native-base';

import StreakBadge from 'components/badges/StreakBadge';
import { ProfileNavigation } from 'enums/navigation.enum';
import { StackNavigationProp } from 'models/navigation.model';
import { theme } from 'themes/default.theme';

interface Props {
  email?: string;
  imageSource?: string;
  name?: string;
}

const ProfileHeader: FC<Props> = ({
  email,
  imageSource,
  name,
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <>
      <HStack justifyContent={'flex-start'} alignItems={'flex-start'} pb={4}>
        <Box>
          {imageSource ? (
            <Image
              alt={name || ''}
              borderRadius={38}
              h={76}
              src={imageSource}
              w={76}
              bg={'gray.300'}
            />
          ) : (
            <Box
              borderRadius={38}
              bg={'gray.300'}
              h={76}
              w={76}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <FontAwesomeIcon icon={faUser} size={36} />
            </Box>
          )}
          {/* <Box
            borderRadius={16}
            bottom={-6}
            h={'32px'}
            position={'absolute'}
            right={-6}
            w={'32px'}
          >
            <TouchableOpacity
              onPress={(): void => {
                onOpen();
              }}
            >
              <Box
                alignItems={'center'}
                bg={'secondary.400'}
                borderRadius={16}
                h={'32px'}
                justifyContent={'center'}
                w={'32px'}
              >
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  size={14}
                  style={styles.buttonIcon}
                />
              </Box>
            </TouchableOpacity>
          </Box> */}
        </Box>

        <VStack flex={1} ml={6}>
          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate(ProfileNavigation.ProfilePersonalScreen);
            }}
          >
            <Heading fontSize={16} fontWeight={700} lineHeight={22}>
              {name}
            </Heading>
            <Text
              fontWeight={400}
              fontSize={12}
              lineHeight={16}
              color={'white'}
            >
              {email}
            </Text>
          </TouchableOpacity>
          <StreakBadge icon={faFire} />
        </VStack>
      </HStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize={'20'}>Edit Profile Photo</Text>
          </Box>
          <Actionsheet.Item>
            <HStack alignItems={'center'}>
              <FontAwesomeIcon
                icon={faCameraRetro}
                size={18}
                style={styles.buttonIcon}
              />
              <Text ml={4}>Take Picture</Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack alignItems={'center'}>
              <FontAwesomeIcon
                icon={faImages}
                size={18}
                style={styles.buttonIcon}
              />
              <Text ml={4}>Select From Gallery</Text>
            </HStack>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

const styles = StyleSheet.create({
  buttonIcon: {
    color: theme.colors.textVisibleSecondary[400],
  },
});

export default ProfileHeader;
