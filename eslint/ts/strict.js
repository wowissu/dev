/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/strict"
  ],
  rules: {
    "@typescript-eslint/no-extraneous-class": "off"
  }
};
