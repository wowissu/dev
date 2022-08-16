/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          object: {
            message: "Use Record",
            fixWith: "Record<string, unknown>"
          },
          "{}": {
            message: "Use Record",
            fixWith: "Record<string, unknown>"
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
