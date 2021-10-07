/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
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
      { selector: 'typeLike', format: ['PascalCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow', trailingUnderscore: 'forbid' },

      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid'
      },

      /** property
       * matches the same as classProperty, objectLiteralProperty, typeProperty
       */
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'property',
        modifiers: ['static'],
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },

      /** method -
       * matches the same as classMethod, objectLiteralMethod, typeMethod
       */
      { selector: 'method', format: ['camelCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },

      /**
       * accessor
       */
      { selector: 'accessor', format: ['camelCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },

      /**
       * enum
       */
      {
        selector: 'enumMember',
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      }
    ]
  }
};
