import React, { FC } from 'react';
import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons/faTriangleExclamation';
import { Text } from 'native-base';

import { WrappedFontAwesomeIcon } from 'components/WrappedFontAwesomeIcon';
import { BluetoothPeripheralState } from 'enums/bluetooth.enum';

import { useBluetoothPeripherals } from '../../hooks/useBluetoothPeripherals.hook';
import { useMemoPeripherals } from '../../hooks/useMemoPeripherals.hook';

const ConnectionIcon: FC = (): JSX.Element => {
  const peripherals = useBluetoothPeripherals();
  const watchedPeripherals = useMemoPeripherals(
    peripherals,
    BluetoothPeripheralState.WATCHED,
  );

  if (watchedPeripherals.length) {
    return (
      <Text fontWeight={'bold'} fontSize={16}>
        {watchedPeripherals.length}
      </Text>
    );
  } else {
    return (
      <WrappedFontAwesomeIcon
        icon={faTriangleExclamation}
        color={'red.500'}
        size={16}
      />
    );
  }

  /*
   * Const isBluetoothScanning = useIsBluetoothScanning();
   * const isAnyPeripheralConnected = useIsAnyPeripheralConnected();
   */

  /*
   * If (isBluetoothScanning) {
   *   return (
   *     <Spinner accessibilityLabel="Is Bluetooth Scanning" color={'white'} />
   *   );
   * } else {
   *   return (
   *     <WrappedFontAwesomeIcon icon={faCheck} color={'#49C510'} size={16} />
   *   );
   *   // if (isAnyPeripheralConnected) {
   *   //   return (
   *   //     <WrappedFontAwesomeIcon icon={faCheck} color={'#49C510'} size={16} />
   *   //   );
   *   // } else {
   *   //   return (
   *   //     <WrappedFontAwesomeIcon
   *   //       icon={faTriangleExclamation}
   *   //       color={'red.500'}
   *   //       size={16}
   *   //     />
   *   //   );
   *   // }
   * }
   */

  return <></>;
};

export default ConnectionIcon;
