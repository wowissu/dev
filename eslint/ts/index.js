/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    './base.js',
    './naming-convention.js',
    './covers.js',
    './class.js'
  ],
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-as-const': 'off',

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
