/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: true }]
  }
};
