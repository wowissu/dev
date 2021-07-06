// .eslintrc.js

/** @type { import('eslint').Linter.Config } */
module.exports = {
  root: true,

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',
    './extends/common-rules.js',
    './extends/babel.js',
    './extends/file-progress.js'
  ],

  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
        es6: true
      },
      parser: 'babel-eslint'
    },
    {
      env: {
        browser: true
      },
      files: ['*.ts', '*.tsx', '*.vue'],
      extends: [
        './extends/ts.js',
        './extends/vue.js'
      ],
      // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working (already in ts.js)
      // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
      // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue']
        // createDefaultProgram: true
      }
    }
  ]
};
