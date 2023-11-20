import React, { FC } from 'react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from 'native-base';

interface Props {
  onPress?: () => void;
}

const AddAllButton: FC<Props> = ({ onPress }): JSX.Element => {
  return (
    <Button
      borderColor={'white'}
      endIcon={<FontAwesomeIcon color={'white'} icon={faUserPlus} size={18} />}
      onPress={(): void => {
        if (onPress) {
          onPress();
        }
      }}
      py={2}
      px={3}
      variant="outline"
      _text={{
        color: 'white',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
        marginRight: 2,
      }}
    >
      Add All
    </Button>
  );
};

export default AddAllButton;
