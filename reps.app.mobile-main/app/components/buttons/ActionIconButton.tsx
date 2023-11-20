import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from 'native-base';

interface Props {
  icon?: IconProp;
  title?: string;
}

const ActionIconButton: FC<Props> = ({ icon, title }): JSX.Element => {
  return (
    <Button
      borderColor={'white'}
      endIcon={
        icon && <FontAwesomeIcon color={'white'} icon={icon} size={16} />
      }
      py={'7px'}
      px={'9px'}
      variant="outline"
      _text={{
        color: 'white',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
      }}
    >
      {title}
    </Button>
  );
};

export default ActionIconButton;
