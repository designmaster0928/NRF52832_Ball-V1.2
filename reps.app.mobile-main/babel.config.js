module.exports = {
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        verbose: true,
      },
    ],
    [
      'module-resolver',
      {
        // Remember to update .eslintrc & .tsconfig.json if you add more paths.
        alias: {
          assets: ['./app/assets'],
          components: ['./app/components'],
          config: ['./app/config'],
          context: ['./app/context'],
          db: ['./app/db'],
          enums: ['./app/enums'],
          helpers: ['./app/helpers'],
          i18n: ['./app/i18n'],
          modals: ['./app/modals'],
          models: ['./app/models'],
          navigation: ['./app/navigation'],
          screens: ['./app/screens'],
          services: ['./app/services'],
          streams: ['./app/streams'],
          templates: ['./app/templates'],
          themes: ['./app/themes'],
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
