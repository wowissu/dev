// cover rules witch is exists in eslint

/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", { "builtinGlobals": false, "allow": ["done", "resolve", "reject", "cb", "fn", "args", "_"], "hoist": "functions" }],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "args": "after-used", "ignoreRestSiblings": true, "varsIgnorePattern": "^_", "argsIgnorePattern": "^_"  }]
  }
};