/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "./base.js",
    "./naming-convention.js",
    "./covers.js",
    "./class.js"
  ]
};
