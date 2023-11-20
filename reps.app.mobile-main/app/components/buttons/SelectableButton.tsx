import React, { FC } from 'react';
import { Button } from 'native-base';

interface Props {
  isSelected?: boolean;
  title: string;
  onPress?: () => void;
}

const SelectableButton: FC<Props> = ({
  isSelected,
  title,
  onPress,
}): JSX.Element => {
  return (
    <Button
      onPress={onPress}
      py={1}
      w={112}
      borderRadius={2}
      _text={{
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 16,
        ...(isSelected ? { color: 'white' } : { color: 'white:alpha.50' }),
      }}
      {...(isSelected ? { bg: 'primary.400' } : { bg: 'black' })}
    >
      {title}
    </Button>
  );
};

export default SelectableButton;
