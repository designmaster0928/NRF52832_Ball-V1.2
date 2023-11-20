import { Theme } from '@aws-amplify/ui-react-native';

import { theme } from './default.theme';

export const amplifyTheme: Theme = {
  components: {
    // button: {
    //   textPrimary: {
    //     color: 'black',
    //   },
    // },
    heading: {
      text: {
        height: 0,
      },
    },
    textField: {
      label: {
        color: 'white',
        marginTop: 8,
      },
    },
  },
  tokens: {
    colors: {
      border: {
        primary: '#6c6c6c',
      },
      brand: {
        primary: {
          10: theme.colors.primary['100'],
          20: theme.colors.primary['200'],
          40: theme.colors.primary['400'],
          60: theme.colors.primary['600'],
          80: theme.colors.primary['400'],
          90: theme.colors.primary['900'],
        },
        secondary: {
          10: theme.colors.secondary['100'],
          20: theme.colors.secondary['200'],
          40: theme.colors.secondary['400'],
          60: theme.colors.secondary['600'],
          80: theme.colors.secondary['400'],
          90: theme.colors.secondary['900'],
        },
      },

      font: {
        primary: 'white',
      },
    },
  },
};
