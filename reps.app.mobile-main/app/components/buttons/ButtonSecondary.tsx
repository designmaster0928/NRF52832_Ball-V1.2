import React, { FC, PropsWithChildren } from 'react';
import { Button } from 'native-base';
import { IButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';

interface Props {
  buttonProps?: IButtonProps;
  onPress?: () => void;
  title?: string;
}

const ButtonSecondary: FC<PropsWithChildren<Props>> = ({
  buttonProps,
  children,
  title,
  onPress,
}): JSX.Element => {
  return (
    <Button
      mt={'test'}
      onPress={onPress ? onPress : null}
      bg={'secondary.400'}
      mx={4}
      _text={{
        color: 'textVisibleSecondary.400',
        fontSize: 16,
        fontWeight: 700,
      }}
      _pressed={{
        bg: 'secondary.600',
      }}
      {...buttonProps}
    >
      {children || title}
    </Button>
  );
};

export default ButtonSecondary;
