export interface BallStats {
  duration?: number;
  maxAcceleration?: number;
  speed?: number;
  timeOfFlight?: number;
}

export interface ShotData {
  duration: number;
  maxAcceleration: number;
  shots: number;
  speedMetersPerSecond: number;
  speedMph: number;
  timeOfFlight: number;
}

export interface ShotPayload {
  id: string;
  sessionId?: string;
  uniqueShotId: string;
  shotData: ShotData;
}
