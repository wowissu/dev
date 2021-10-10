/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    'plugin:vue/recommended',
    './rules.js'
  ]
};
