export type StatType = 'achievement' | 'session' | 'throw';

export type StatHand = 'left' | 'right' | 'mixed' | 'unknown';

interface UserStatBase {
  achievementId: string;
  dateTime: string;
  globalSecondaryIndex: string;
  primarySortKey: string;
  reps: number;
  repTypes: string;
  statId: string;
  statType: StatType;
  timestamp: number;
  userId: string;
}

export interface UserStatSession extends UserStatBase {
  averageSpeed: number;
  hand: StatHand;
  sessionTime: number;
  topSpeed: number;
}

export interface UserStatThrow extends UserStatBase {
  elapsedTime: number;
  hand: StatHand;
  speed: number;
}

export interface UserStatAchievement extends UserStatBase {
  achievementId: string;
}

export interface UserStats {
  achievementId: string;
  averageSpeed: number;
  dateTime: string;
  elapsedTime: number;
  globalSecondaryIndex: string;
  hand: StatHand;
  primarySortKey: string;
  sessionTime: number;
  speed: number;
  statId: string;
  reps: number;
  repTypes: string;
  timestamp: number;
  topSpeed: number;
  userId: string;
}

export interface UserStatSessionThrowParams {
  elapsedTime: number;
  hand: StatHand;
  sessionId: string;
  speed: number;
  throwType: string;
}
