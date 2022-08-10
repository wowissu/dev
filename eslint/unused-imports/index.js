/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error"
  }
};
