import React, { FC } from 'react';
import { Text } from 'native-base';

import { splitNumber } from 'helpers/number.helper';

interface Props {
  animateToNumber: number;
  fontSize?: number;
  precision?: number;
}

const StatWithPrecision: FC<Props> = ({
  animateToNumber,
  fontSize,
  precision,
}): JSX.Element => {
  if (precision && precision > 0) {
    const { decimal, integer } = splitNumber(animateToNumber);

    const trimmedDecimal: string = decimal.toString().substring(0, precision);

    return (
      <Text
        fontSize={fontSize ? fontSize : 64}
        fontWeight={'600'}
        textAlign={'center'}
      >
        {integer}
        <Text fontSize={36} fontWeight={'600'} textAlign={'center'}>
          .{trimmedDecimal}
        </Text>
      </Text>
    );
  }

  return (
    <Text
      fontSize={fontSize ? fontSize : 64}
      fontWeight={'600'}
      textAlign={'center'}
    >
      {animateToNumber.toFixed(0)}
    </Text>
  );
};

export default StatWithPrecision;
