/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "@typescript-eslint/ban-types": [
      "warn",
      {
        extendDefaults: true,
        types: {
          object: {
            message: "Use Record<string, unknown>"
          },
          "{}": {
            message: "Use Record<string, unknown>"
          },
          Function: {
            message: "Use arrow function",
            fixWith: "() => void"
          }
        }
      }
    ]
  }
};
