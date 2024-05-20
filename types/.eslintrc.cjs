/* eslint-env node */
const path = require('path');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    '@wowissu/eslint-config/common',
    '@wowissu/eslint-config/file-progress'
  ],

  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  globals: {
    ga: true, // Google Analytics
    __webpack_public_path__: true,
    __statics: true,
    process: true
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: {
        browser: true
      },
      extends: [
        '@wowissu/eslint-config/ts'
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
