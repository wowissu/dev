/* eslint-env node */
/** @type { import('eslint').Linter.Config } */
module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    requireConfigFile: false
  },
  extends: [
    "eslint:recommended",
    "./common",
    "./@babel"
  ],
  rules: {
    quotes: ["warn", "double", { avoidEscape: true }]
  }
};
