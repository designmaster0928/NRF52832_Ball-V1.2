import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Icon, Input, Pressable } from 'native-base';

interface Props {
  onPressIcon?: (shouldShow: boolean) => void;
  placeholder?: string;
  shouldShow?: boolean;
}

const PasswordField: FC<Props> = ({
  onPressIcon,
  placeholder,
  shouldShow,
}): JSX.Element => {
  return (
    <Input
      bg={'#6c6c6c'}
      defaultValue={''}
      mt={2}
      type={shouldShow ? 'text' : 'password'}
      InputRightElement={
        <Pressable
          onPress={(): void => onPressIcon && onPressIcon(!shouldShow)}
        >
          <Icon
            as={
              <FontAwesomeIcon
                icon={shouldShow ? faEye : faEyeSlash}
                color={'white'}
                style={styles.formIcon}
                size={20}
              />
            }
          />
        </Pressable>
      }
      placeholder={placeholder}
      placeholderTextColor={'gray.200'}
      _android={{
        _input: {
          m: 0,
        },
      }}
      _input={{
        bg: '#6c6c6c',
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 20,
        m: 1,
      }}
      _focus={{
        bg: '#6c6c6c',
        borderColor: 'gray.200',
      }}
    />
  );
};

const styles = StyleSheet.create({
  formIcon: {
    marginRight: 16,
  },
});

export default PasswordField;
