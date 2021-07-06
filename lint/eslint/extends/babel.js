/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
        es6: true
      },
      parser: 'babel-eslint'
    }
  ]
};
