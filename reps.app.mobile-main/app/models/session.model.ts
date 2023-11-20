import { WorkoutFreestyleTypes } from 'enums/workout.enum';

import { StatHand } from './user-stats.model';

export interface SessionAccumulator {
  averageSpeed: number;
  deviceThrows: {
    [key: string]: number;
  };
  duration: number;
  lastThrowSpeed: number;
  maxAcceleration?: number;
  sessionId?: string;
  sessionSpeeds: Array<number>;
  throws: number;
  timeOfFlight?: number;
}

export interface BallSessionStats {
  hand?: StatHand;
  averageSpeed: number;
  lastThrowSpeed: number;
  sessionId?: string;
  sessionSpeeds: Array<number>;
  throws: number;
  repTypes: WorkoutFreestyleTypes;
  throwId?: string;
}
