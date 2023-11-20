import { DataStore } from 'aws-amplify';

import { getUserId } from 'helpers/user.helper';
import { buildUserStatThrow } from 'helpers/user-stats.helper';
import { UserStatSessionThrowParams } from 'models/user-stats.model';

import { UserStats } from '../../src/models';

export function saveUserSessionThrow(
  stats: UserStatSessionThrowParams,
): Promise<UserStats | null> {
  const userId = getUserId();

  if (userId) {
    const userStatThrow = buildUserStatThrow(userId, {
      elapsedTime: stats.elapsedTime,
      hand: stats.hand,
      speed: stats.speed,
    });

    console.log('userStatThrow', userStatThrow);

    return DataStore.save(new UserStats(userStatThrow));
  } else {
    return Promise.resolve(null);
  }
}

export function saveUserStats(stats: UserStats): Promise<UserStats> {
  return DataStore.save(new UserStats(stats));
}
