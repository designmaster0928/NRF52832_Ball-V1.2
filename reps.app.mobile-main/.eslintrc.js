module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['@react-native-community', 'eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*'],
      rules: {
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      // Enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            // IgnoredMethodNames: [],
            overrides: {
              // Accessors: AccessibilityLevel;
              constructors: 'no-public', // Methods: AccessibilityLevel;
              /*
               * Properties: AccessibilityLevel;
               * parameterProperties: AccessibilityLevel;
               */
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            /*
             * AllowArgumentsExplicitlyTypedAsAny: true,
             * allowDirectConstAssertionInArrowFunctions: true,
             */
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowedNames: [],
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'signature',
              'protected-field',
              'private-field',
              'public-field',
              'constructor',
              'decorated-method',
              'protected-method',
              'private-method',
              'public-method',
              'method',
            ],
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            selector: 'variableLike',
          },
          {
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            selector: 'variable',
            types: ['boolean'],
          },
        ],

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-require-imports': ['error'],
        '@typescript-eslint/no-unused-expressions': 'error',
        /*
         * Commenting this out for now.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.md
         * Instead of enabling typedef, it is generally recommended to use the --noImplicitAny and --strictPropertyInitialization
         * compiler options to enforce type annotations only when useful.
         *
         * '@typescript-eslint/typedef': [
         *   'error',
         *   {
         *     variableDeclaration: true,
         *   },
         * ],
         */

        indent: 'off',
        'no-unused-expressions': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jest', 'simple-import-sort'],
  root: true,
  rules: {
    camelcase: [
      'warn',
      {
        properties: 'never',
      },
    ],
    'capitalized-comments': 'warn',
    curly: ['error', 'all'],
    // 'default-case-last': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        IIFEs: false,
        max: 80,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 3,
      },
    ],
    'multiline-comment-style': ['error', 'starred-block'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-new-object': 'error',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'warn',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'], // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ], // Packages. `react` related packages come first.
          ['^react', '^@?\\w'], // Internal packages.
          ['^(@|@reps|@ui)(/.*|$)'],
          ['^(rxjs)(/.*|$)'],
          ['^(src)(/.*|$)'], // Remember to update .tsconfig.json & babel.config if you add more paths.
          [
            '^(assets|components|config|context|db|enums|helpers|i18n|models|navigation|screens|services|streams|templates|themes|)(/.*|$)',
          ], // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    yoda: 'error',
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
