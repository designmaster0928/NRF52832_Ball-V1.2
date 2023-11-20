import React, { FC } from 'react';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';

import WorkoutSummaryActivityItem from 'components/activity/WorkoutSummaryActivityItem';
import {
  filterDatesWithinLastNumDays,
  getCurrentStreak,
} from 'helpers/date.helper';

interface Props {
  dailySessions: Array<string>;
}

const WorkoutSummaryPraise: FC<Props> = ({ dailySessions }): JSX.Element => {
  const numberOfDays = 4 * 7; // 4 Weeks
  const datesInTheLastFourWeeks = filterDatesWithinLastNumDays(
    dailySessions,
    numberOfDays,
  );

  const streak = getCurrentStreak(datesInTheLastFourWeeks);

  const numberOfDatesInTheLastFourWeeks = datesInTheLastFourWeeks.length;

  let title = '';

  if (numberOfDatesInTheLastFourWeeks === 0) {
    title =
      'You are almost there! Complete 10 or more Shots or Reps to complete a session!';
  }

  if (numberOfDatesInTheLastFourWeeks > 0) {
    title = `Great job! That’s ${numberOfDatesInTheLastFourWeeks} workout${
      numberOfDatesInTheLastFourWeeks > 1 ? 's' : ''
    } over the last 4 weeks!`;
  }

  if (streak > 0) {
    title = `Congratulations you are on a ${streak} day streak! Keep up the great work!`;
  }

  if (numberOfDatesInTheLastFourWeeks >= numberOfDays) {
    title = `You are amazing! ${numberOfDatesInTheLastFourWeeks} out of ${numberOfDays} is a perfect streak!`;
  }

  return (
    <WorkoutSummaryActivityItem
      icon={faDumbbell}
      iconColor={'#8FFFA8'}
      title={title}
    />
  );
};

export default WorkoutSummaryPraise;
