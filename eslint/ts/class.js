// cover rules witch is exists in eslint

/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ["self"] // Allow `const self = this`; `[]` by default
      }
    ],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],

    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "no-public",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit"
        }
      }
    ]
  }
};