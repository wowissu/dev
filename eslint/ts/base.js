/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",

    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "object": false,
          "{}": false
        }
      }
    ],

    "quotes": "off",
    "@typescript-eslint/quotes": ["warn", "single", { "avoidEscape": true }],

    "semi": "off",
    "@typescript-eslint/semi": ["error"],

    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],

    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always", { arraysInObjects: false }],

    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", "always"],

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

    "@typescript-eslint/type-annotation-spacing": ["error", {
      "before": true, "after": true, "overrides": {
        "colon": { "before": false, "after": true }
        // 'arrow': { 'before': true, 'after': true }
      }
    }],

    "@typescript-eslint/typedef": [ "error", {
      "arrayDestructuring": true,
      "arrowParameter": false,
      "memberVariableDeclaration": true,
      "objectDestructuring": false,
      "parameter": true,
      "propertyDeclaration": true,
      "variableDeclaration": false,
      "variableDeclarationIgnoreFunction": false
    }]
  }
};
