// .eslintrc.js

const { resolve } = require('path');

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
    '@wowissu/eslint-config/babel',
    '@wowissu/eslint-config/file-progress'
  ],

  parserOptions: {
    project: resolve(__dirname, 'tsconfig.json'),
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
        // './eslint/ts/type-checking'
      ]
    }
  ]
};
