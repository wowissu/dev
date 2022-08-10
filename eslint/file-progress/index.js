/**
 * show progress in process
 */

/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    "file-progress"
  ],

  // add your custom rules here
  rules: {
    "file-progress/activate": 1
  }
};
