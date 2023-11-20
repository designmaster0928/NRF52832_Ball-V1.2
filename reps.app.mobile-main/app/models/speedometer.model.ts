export interface Label {
  name: string;
  labelColor: string;
  activeBarColor: string;
}

export interface SpeedometerProps {
  allowedDecimals?: number;
  defaultValue?: number;
  easeDuration?: number;
  halfCircleStyle?: object;
  imageStyle?: object;
  imageWrapperStyle?: object;
  innerCircleStyle?: object;
  labelNoteStyle?: object;
  labels?: Array<Label>;
  labelStyle?: object;
  labelWrapperStyle?: object;
  maxValue?: number;
  minValue?: number;
  needleImage?: any;
  outerCircleStyle?: object;
  size?: number;
  topValue?: number;
  useNativeDriver?: boolean;
  value: number;
  wrapperStyle?: object;
}
