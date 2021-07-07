/**
 * 通用 rules
 *
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  // add your custom rules here
  rules: {
    'generator-star-spacing': ['error', 'after'],
    'indent': ['error', 2, { 'MemberExpression': 1, 'SwitchCase': 1 }],
    'eqeqeq': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'off',
    'no-useless-escape': 'off',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': 'error',
    // allow console.log during development only
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Custom
    'newline-after-var': ['error', 'always'],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'no-unused-vars': ['error', { 'args': 'after-used', 'ignoreRestSiblings': true, 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_'  }],
    'key-spacing': ['error', { 'mode': 'strict' }],
    'keyword-spacing': ['error', { 'after': true, 'before': true }],
    'space-infix-ops': 'error',
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': ['if', 'switch', 'do', 'while', 'for', 'debugger', 'function'] },
      { 'blankLine': 'always', 'prev': ['import'], 'next': '*' },
      { 'blankLine': 'any', 'prev': ['import'], 'next': ['import'] }
    ],
    'padded-blocks': ['error', 'never'],
    'newline-before-return': 'error',
    'no-shadow': ['error', { 'builtinGlobals': true, 'allow': ['done', 'resolve', 'reject', 'cb', 'fn', 'args', '_'] , 'hoist': 'functions'}]
  }
};
