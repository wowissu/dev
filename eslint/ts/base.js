/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-as-const": "off",

    "@typescript-eslint/adjacent-overload-signatures": "error",

    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          object: false
        }
      }
    ],

    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always", { arraysInObjects: false }],

    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",

    "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true }]
  }
};
