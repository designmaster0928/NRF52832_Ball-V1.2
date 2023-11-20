import React, { FC } from 'react';
import { Text, VStack } from 'native-base';

import { HistoryListDataItemStat } from 'models/list.model';

const StatDisplaySmall: FC<HistoryListDataItemStat> = ({
  stat,
  title,
  statUnit,
}): JSX.Element => {
  return (
    <VStack px={'12px'} alignItems={'center'} justifyContent={'center'}>
      {statUnit ? (
        <>
          <Text fontWeight={700} fontSize={20} lineHeight={28}>
            {stat}
            <Text fontWeight={700} fontSize={10} lineHeight={32}>
              {' '}
              {statUnit}
            </Text>
          </Text>
        </>
      ) : (
        <>
          <Text fontWeight={700} fontSize={20} lineHeight={28}>
            {stat}
          </Text>
        </>
      )}

      <Text fontWeight={300} fontSize={12} lineHeight={18}>
        {title}
      </Text>
    </VStack>
  );
};

export default StatDisplaySmall;
