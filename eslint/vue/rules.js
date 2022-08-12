/** @return { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    // Required to lint *.vue files
    // See https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    "vue"
  ],
  rules: {
    "vue/html-closing-bracket-newline": ["error", { singleline: "never", multiline: "always" }],
    "vue/max-attributes-per-line": ["error", { singleline: 10, multiline: 1 }],
    "vue/no-v-html": 0,
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/block-tag-newline": ["error", { singleline: "always", multiline: "always", maxEmptyLines: 1 }],
    "vue/custom-event-name-casing": ["error", "camelCase", { ignores: [] } ],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/no-useless-v-bind": ["error", { ignoreIncludesComment: false, ignoreStringEscape: false }],
    "vue/no-useless-mustaches": ["error", { ignoreIncludesComment: false, ignoreStringEscape: false }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: true, ignores: [] }],
    "vue/no-empty-component-block": "error",
    "vue/html-comment-content-newline": ["error", { singleline: "never", multiline: "always" }, { exceptions: [] } ],
    "vue/html-comment-content-spacing": ["error", "always", { exceptions: [] } ],
    "vue/html-comment-indent": ["error", 2],
    "vue/match-component-file-name": ["error", { extensions: [], shouldMatchCase: false }],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    // "vue/new-line-between-multi-line-property": ["error", { minLineOfMultilineProperty: 0 }],
    "vue/no-this-in-before-route-enter": ["error"],
    "vue/no-v-text": "error",
    "vue/require-direct-export": "error",
    "vue/script-indent": ["error", 2, { baseIndent: 0, switchCase: 0, ignores: [] }],

    "vue/array-bracket-newline": ["error", "consistent"],
    "vue/array-bracket-spacing": ["error", "never"],
    "vue/arrow-spacing": ["error", { before: true, after: true }],
    "vue/block-spacing": ["error", "always"],
    "vue/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "vue/comma-dangle": ["error", "never"],
    "vue/comma-spacing": ["error", { before: false, after: true }],
    "vue/comma-style": ["error", "first"],
    "vue/dot-location": ["error", "property"],
    "vue/dot-notation": ["error"],
    "vue/eqeqeq": ["error", "always"],
    "vue/func-call-spacing": ["error", "never"],
    "vue/key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
    "vue/keyword-spacing": ["error", { after: true, before: true }],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/no-constant-condition": ["error"],
    "vue/no-empty-pattern": ["error"],
    "vue/no-extra-parens": ["error"],
    "vue/no-loss-of-precision": ["error"],
    "vue/no-sparse-arrays": ["error"],
    "vue/no-useless-concat": ["error"],
    "vue/object-curly-newline": ["error", { multiline: true, consistent: true }],
    "vue/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "vue/object-shorthand": ["error", "always"],
    "vue/operator-linebreak": ["error", "before"],
    "vue/prefer-template": ["error"],
    "vue/quote-props": ["error", "as-needed"],
    "vue/space-in-parens": ["error", "never"],
    "vue/space-infix-ops": ["error", { int32Hint: false }],
    "vue/space-unary-ops": ["error", { words: true, nonwords: false }],
    "vue/template-curly-spacing": ["error", "never"]

    // "vue/camelcase": ["error"],
    // "vue/max-len": ["error"],
    // "vue/no-irregular-whitespace": ["error", { skipStrings:  }],
    // "vue/no-restricted-syntax": ["error"],

  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off"
      }
    }
  ]
};
