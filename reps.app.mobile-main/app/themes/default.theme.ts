/* eslint-disable sort-keys */
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  breakpoints: {
    base: 0, // 0-374 dp
    sm: 376, // 375-479 dp
    md: 481, // 480-767 dp
    lg: 769, // 768-991 dp
    xl: 993, // 992-1279 dp
    '2xl': 1281, // 1280 dp and up
  },
  colors: {
    primary: {
      '50': '#82b3f8',
      '100': '#619df1',
      '200': '#4388e8',
      '300': '#2772dc',
      '400': '#1f61bd',
      '500': '#2157a2',
      '600': '#224e8a',
      '700': '#224472',
      '800': '#213a5d',
      '900': '#1d2f48',
    },
    secondary: {
      '50': '#ecff9f',
      '100': '#e4ff77',
      '200': '#dcff50',
      '300': '#d3fd2a',
      '400': '#ccfc02',
      '500': '#b4de09',
      '600': '#9ec10f',
      '700': '#88a612',
      '800': '#748c15',
      '900': '#617316',
    },

    backgroundGray: {
      '50': '#a679a6',
      '100': '#8d6a8d',
      '200': '#705f70',
      '300': '#555255',
      '400': '#423f42',
      '500': '#323632',
      '600': '#242c24',
      '700': '#182118',
      '800': '#0d140d',
      '900': '#040604',
    },
    textVisiblePrimary: {
      '400': '#ffffff',
    },
    textVisibleSecondary: {
      '400': '#000000',
    },
    defaultText: {
      '50': '#a679a6',
      '100': '#8d6a8d',
      '200': '#705f70',
      '300': '#555255',
      '400': '#423f42',
      '500': '#323632',
      '600': '#242c24',
      '700': '#182118',
      '800': '#0d140d',
      '900': '#040604',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  // https://docs.nativebase.io/typescript
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}
