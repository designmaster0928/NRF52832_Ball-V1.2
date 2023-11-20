/* eslint-disable max-lines-per-function */
import React, { FC, useMemo } from 'react';
import { processColor, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import { HStack, Text } from 'native-base';

import { filterAndReformatMonthlyThrowsFormatted } from 'helpers/averages.helper';

import { useGetLastNumMonths } from '../../hooks/useGetTrailingNumMonths.hook';
import { useNumberOfRepsByMonth } from '../../hooks/useNumberOfRepsByMonth.hook';

import AnalyticsWrapper from './AnalyticsWrapper';

const white = 'white';

const AnalyticsWallballReps: FC = (): JSX.Element => {
  const lastFiveMonths = useGetLastNumMonths(5);

  const numberOfThrowsByMonth = useNumberOfRepsByMonth();
  const formattedData = useMemo(() => {
    return {
      config: {
        barWidth: 0.4,
      },
      dataSets: [
        {
          config: {
            color: processColor('rgba(166, 206, 226)'),
            highlightColor: processColor('gray'),
            valueTextColor: processColor('transparent'),
          },
          label: 'Wallball Reps',
          values: filterAndReformatMonthlyThrowsFormatted(
            numberOfThrowsByMonth,
          ),
        },
      ],
    };
  }, [numberOfThrowsByMonth]);

  return (
    <AnalyticsWrapper title={'Wallball Reps'}>
      <BarChart
        borderColor={processColor(white)}
        data={formattedData}
        legend={{
          enabled: false,
        }}
        style={styles.chart}
        xAxis={{
          axisLineColor: processColor(white),
          axisLineWidth: 1,
          // Enabled: false,
          drawLabels: false,
          fontWeight: '700' as any,
          granularity: 1,
          granularityEnabled: true,
          gridColor: processColor(white),
          labelCount: 5,
          labelCountForce: true,
          position: 'BOTTOM',
          textColor: processColor(white),
          textSize: 14,
        }}
        yAxis={{
          left: {
            axisLineColor: processColor(white),
            axisLineWidth: 1,
            axisMinimum: 0,
            fontWeight: '700' as any,
            granularity: 1,
            granularityEnabled: true,
            gridColor: processColor(white),
            labelCount: 5,
            textColor: processColor(white),
            textSize: 14,
            valueFormatter: '###',
          },
          right: {
            enabled: false,
          },
        }}
      />
      <HStack
        justifyContent={'space-evenly'}
        ml={8}
        mr={2}
        _text={{
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 18,
        }}
      >
        {lastFiveMonths.map((monthName: string) => {
          return <Text key={monthName}>{monthName}</Text>;
        })}
      </HStack>
    </AnalyticsWrapper>
  );
};

const styles = StyleSheet.create({
  chart: {
    height: 300,
  },
  xAxis: {},
});

export default AnalyticsWallballReps;
