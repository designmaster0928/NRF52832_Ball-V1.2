import { v5 as uuidv5 } from 'uuid';

import {
  UserStatAchievement,
  UserStats,
  UserStatSession,
  UserStatThrow,
} from 'models/user-stats.model';

export function buildUserStatSessionId(userId: string): string {
  const timestamp = new Date().getTime();
  return uuidv5(`Session-${timestamp}`, userId);
}

export function buildUserStatSession(
  userId: string,
  statData: UserStatSession,
  sessionId: string,
): Partial<UserStats> {
  const timestamp = new Date().getTime();

  return {
    achievementId: '',
    averageSpeed: statData.averageSpeed,
    dateTime: new Date().toISOString(),
    globalSecondaryIndex: `Session#${statData.throwType}#${statData.hand}#${timestamp}`,
    hand: statData.hand,
    primarySortKey: `Session#${sessionId}#${timestamp}`,
    sessionTime: statData.sessionTime,
    statId: sessionId,
    throwType: statData.throwType,
    throws: statData.throws,
    timestamp: timestamp,
    topSpeed: statData.topSpeed,
    userId: userId,
  };
}

export function buildUserStatThrow(
  userId: string,
  statData: Partial<UserStatThrow>,
): UserStats {
  const timestamp = new Date().getTime();
  const throwId = uuidv5(`Throw-${timestamp}`, userId);

  return {
    achievementId: '',
    averageSpeed: 0,
    dateTime: new Date().toISOString(),
    elapsedTime: statData.elapsedTime || 0,
    globalSecondaryIndex: `Throw#${statData.throwType}#${statData.hand}#${timestamp}`,
    hand: statData.hand || 'mixed',
    primarySortKey: `Throw#${throwId}#${timestamp}`,
    repTypes: statData.throwType || 'unknown',
    reps: 0,
    sessionTime: 0,
    speed: Number(statData.speed?.toFixed(4)) || 0,
    statId: throwId,
    timestamp: timestamp,
    topSpeed: 0,
    userId: userId,
  };
}

export function buildUserStatAchievement(
  userId: string,
  achievementTypeId: string,
  statData: UserStatAchievement,
): Partial<UserStats> {
  const timestamp = new Date().getTime();
  const achievementId = uuidv5(`Achievement-${timestamp}`, userId);

  return {
    achievementId: achievementTypeId,
    dateTime: new Date().toISOString(),
    globalSecondaryIndex: `Achievement#${achievementId}#${timestamp}`,
    primarySortKey: `Achievement#${achievementId}#${timestamp}`,
    statId: achievementId,
    timestamp: timestamp,
    userId: userId,
  };
}
