export interface ThrowStatsRaw {
  SpeedMps: number;
  MaxAccG: number;
  DurationS: number;
  TimeOfFlightS: number;
}

export interface ThrowStats {
  speed: number;
}
