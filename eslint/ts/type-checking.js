/** 參照 @typescript-eslint/recommended-requiring-type-checking 但沒那麼機車 */

/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": ["error", {
      "allowNumber": true,
      "allowBoolean": false,
      "allowAny": false,
      "allowNullish": false
    }],
    "@typescript-eslint/unbound-method": [ "error", { "ignoreStatic": true } ],
    "@typescript-eslint/no-floating-promises": ["warn", { "ignoreVoid": true, "ignoreIIFE": true }],
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off"
  }
};