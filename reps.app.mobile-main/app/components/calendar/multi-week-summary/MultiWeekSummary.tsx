import React, { FC, useEffect, useState } from 'react';
import { VStack } from 'native-base';

import { fillGrid, generateDates } from 'helpers/summary.helper';
import { WorkoutSummaryDayValues } from 'models/training.model';

import MultiWeekSummaryWeek from './MultiWeekSummaryWeek';
import WeeklyHeader from './WeeklyHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  data: Array<string>;
}

const MultiWeekSummary: FC<Props> = ({ data }): JSX.Element => {
  const [grid, setGrid] = useState(
    Array<Array<{ status: string; isToday: boolean }>>,
  );

  useEffect(() => {
    setGrid(fillGrid(data));
  }, []);

  return (
    <VStack mb={8}>
      <WeeklyHeader />

      {grid?.map((item, index) => {
        return <MultiWeekSummaryWeek data={item} index={index} key={index} />;
      })}
    </VStack>
  );
};

export default MultiWeekSummary;
