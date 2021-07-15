"use strict";

module.exports = {
  extends: [
    "stylelint-config-recommended",
  ],
  rules: {
    "rule-empty-line-before": ["always-multi-line", {
      "except": ["after-single-line-comment", "first-nested"]
    }],
    "max-nesting-depth": 3,
    "function-parentheses-space-inside": "never-single-line",
    "string-quotes": "double"
  }
}