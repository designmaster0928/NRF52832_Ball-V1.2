import React, { FC } from 'react';
import { Button as NativeBaseButton, IButtonProps } from 'native-base';

const Button: FC<IButtonProps> = (props): JSX.Element => {
  return (
    <NativeBaseButton
      flex={1}
      _text={{ fontSize: 16, fontWeight: 700, lineHeight: 22 }}
      {...props}
    />
  );
};

export default Button;
