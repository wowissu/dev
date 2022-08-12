/**
 * 通用 rules
 *
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },

  // add your custom rules here
  rules: {
    "generator-star-spacing": ["error", "after"],
    indent: ["error", 2, { MemberExpression: 1, SwitchCase: 1 }],
    eqeqeq: ["error", "always"],
    "prefer-const": "error",
    "prefer-promise-reject-errors": "off",
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-useless-escape": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    quotes: ["warn", "single", { avoidEscape: true }],
    semi: "error",
    // allow console.log during development only
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // Custom
    "newline-after-var": ["error", "always"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "object-curly-newline": ["error", { multiline: true, consistent: true }],
    "object-curly-spacing": ["error", "always", { arraysInObjects: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-dangle": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true, varsIgnorePattern: "^_", argsIgnorePattern: "^_"  }],
    "key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
    "keyword-spacing": ["error", { after: true, before: true }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["if", "switch", "do", "while", "for", "debugger", "function"] },
      { blankLine: "always", prev: ["if", "switch", "do", "while", "for", "debugger", "function"], next: "*" },
      { blankLine: "always", prev: ["import"], next: "*" },
      { blankLine: "any", prev: ["import"], next: ["import"] }
    ],
    "padded-blocks": ["error", "never"],
    "newline-before-return": "error",
    "no-shadow": ["error", { builtinGlobals: false, allow: ["done", "resolve", "reject", "cb", "fn", "args", "_"], hoist: "functions" }],
    "no-trailing-spaces": "error",
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "always",
      asyncArrow: "always"
    }],
    "template-curly-spacing": ["error", "never"],
    "no-useless-concat": ["error"],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "object-shorthand": ["error", "always"],
    "quote-props": ["error", "as-needed"],
    "space-infix-ops": ["error", { int32Hint: false }],
    "space-unary-ops": ["error", { words: true, nonwords: false }]
  }
};
