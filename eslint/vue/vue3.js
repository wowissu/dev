/** @return { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    './rules.js'
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  }
};
