/**
 * show progress in process
 */

/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    'plugin:vue/recommended',
    './rules.js'
  ],
  plugins: [
    // Required to lint *.vue files
    // See https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    'vue'
  ]
};
