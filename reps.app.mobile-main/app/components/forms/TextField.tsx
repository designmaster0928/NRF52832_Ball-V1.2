import React, { FC } from 'react';
import { Input } from 'native-base';

interface Props {
  placeholder?: string;
}

const TextField: FC<Props> = ({ placeholder }): JSX.Element => {
  return (
    <Input
      bg={'#6c6c6c'}
      defaultValue={''}
      mt={2}
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

export default TextField;
