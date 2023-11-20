/* eslint-disable max-lines-per-function */
import React, { FC } from 'react';
import { processColor, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { HStack, Text } from 'native-base';

// HOLD: import { SelectLarge } from 'components/forms/SelectLarge';
import { getLastFiveMonthsAverage } from '../../helpers/averages.helper';
import { useGetLastNumMonths } from '../../hooks/useGetTrailingNumMonths.hook';
import { useStoredBallSessions } from '../../hooks/useStoredBallSessions.hook';

import AnalyticsWrapper from './AnalyticsWrapper';

const white = 'rgb(255, 255, 255)';

const AnalyticsAverageSpeed: FC = (): JSX.Element => {
  const lastFiveMonths = useGetLastNumMonths(5);
  const storedBallSessions = useStoredBallSessions();
  const averageSpeeds = getLastFiveMonthsAverage(storedBallSessions);

  return (
    <AnalyticsWrapper title={'Average Shot Speed'}>
      {/* <SelectLarge
        options={['Left', 'Right']}
        title={'Select Hand'}
        selectProps={{
          mb: 4,
          mt: 0,
        }}
      /> */}
      <LineChart
        borderColor={processColor(white)}
        data={{
          dataSets: [
            {
              config: {
                circleColor: processColor(white),
                circleRadius: 5,
                color: processColor(white),
                lineWidth: 2,
                mode: 'CUBIC_BEZIER',
                valueTextColor: processColor('transparent'),
              },
              label: 'Average Shot Speed',
              values: averageSpeeds,
            },
          ],
        }}
        legend={{
          enabled: false,
        }}
        marker={{
          enabled: true,
          markerColor: processColor('white'),
          textColor: processColor('black'),
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
        justifyContent={'space-between'}
        ml={4}
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

export default AnalyticsAverageSpeed;
