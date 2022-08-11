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

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],

    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always", { arraysInObjects: false }],

    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", { "before": false, "after": true }],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error", { "after": true, "before": true }],

    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": ["if", "switch", "do", "while", "for", "debugger", "function"]},
      { "blankLine": "always", "prev": ["if", "switch", "do", "while", "for", "debugger", "function"], "next": "*" },
      { "blankLine": "always", "prev": ["import"], "next": "*" },
      { "blankLine": "any", "prev": ["import"], "next": ["import"]}
    ],

    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": false }],

    "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true, "overrides": { "arrow": { "before": true, "after": true } } }]
  }
};
