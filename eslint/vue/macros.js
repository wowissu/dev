/** @return { import('eslint').Linter.Config } */
module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },
  globals: {
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
  }
};
