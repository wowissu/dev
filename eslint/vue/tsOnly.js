/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    "vue/block-lang": ["error",
      {
        script: {
          lang: "ts"
        }
      }
    ]
  }
};
