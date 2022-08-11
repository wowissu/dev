/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": ["error", { "fixToUnknown": true, "ignoreRestArgs": true }],

    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-return": "error"
  }
};
