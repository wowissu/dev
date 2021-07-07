/**
 * show progress in process
 */

/** @return { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/no-v-html': 0,
    'vue/prop-name-casing': ['error', 'kebab-case'],
    'vue/block-tag-newline': ['error', {
      'singleline': 'consistent',
      'multiline': 'consistent',
      'maxEmptyLines': 0
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-useless-v-bind': ['error', {
      'ignoreIncludesComment': false,
      'ignoreStringEscape': false
    }],
    'vue/no-useless-mustaches': ['error', {
      'ignoreIncludesComment': false,
      'ignoreStringEscape': false
    }],
    'vue/component-name-in-template-casing': ['error', "PascalCase" | "kebab-case"],
    'vue/no-empty-component-block': ['error']
  }
};
