/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const STAGE: string;
  export const DEMO_MODE: boolean;
}

declare module 'react-native-pulse';
declare module 'convert-string';
