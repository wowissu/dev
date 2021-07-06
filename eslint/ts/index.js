/**
 * show progress in process
 */

/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    // ESLint typescript rules
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'] // Allow `const self = this`; `[]` by default
      }
    ],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/naming-convention': [
      'warn',
      // variable, function, parameter
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },

      { selector: 'memberLike', modifiers: ['private'], format: ['camelCase'], leadingUnderscore: 'require' },
      // class, interface, typeAlias, enum, typeParameter
      { selector: 'typeLike', format: ['PascalCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
      {
        selector: 'parameterProperty',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid'
      },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
      { selector: 'method', format: ['camelCase'], leadingUnderscore: 'allow' },
      { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
      { selector: 'accessor', format: ['camelCase'] },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'property',
        modifiers: ['static'],
        format: ['PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      { selector: 'method', format: ['camelCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      { selector: 'accessor', format: ['camelCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', args: 'after-used' }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'no-public',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          object: false
        }
      }
    ]
  }
};
