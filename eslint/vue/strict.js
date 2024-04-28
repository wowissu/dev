/** @return { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    // Required to lint *.vue files
    // See https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    "vue"
  ],
  rules: {
    "vue/no-multiple-objects-in-class": "warn",
    "vue/no-static-inline-styles": ["warn", { allowBinding: true }],
    "vue/no-template-target-blank": ["warn", { allowReferrer: false, enforceDynamicLinks: "always" }],
    "vue/no-unused-properties": ["warn", { groups: ["data", "computed"], deepData: true, ignorePublicMembers: true }],
    "vue/prefer-prop-type-boolean-first": "warn",
    "vue/prefer-true-attribute-shorthand": ["warn", "always"],
    "vue/define-macros-order": ["warn", { order: ["defineProps", "defineEmits"] }],
    "vue/component-tags-order": ["warn", { order: [ "script", "template", "style" ] }],
    "vue/static-class-names-order": "warn",
    "vue/no-unused-refs": "warn"
  }
};
