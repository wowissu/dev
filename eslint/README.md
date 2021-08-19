# @wowissu/eslint

Add extend into .eslintrc for active the features.

```javascript
// .eslintrc.js

module.exports = {
  // ...
  extends: [
    '@wowissu/eslint-config/common',
    '@wowissu/eslint-config/babel',
    '@wowissu/eslint-config/file-progress'
  ],
  // ...
}
```

## `@wowissu/eslint/common`

![eslint](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/eslint?filename=eslint%2Fpackage.json)

Common js rules, must use this as base.

## `@wowissu/eslint/babel`

![babel-eslint](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/babel-eslint?filename=eslint%2Fpackage.json)

## `@wowissu/eslint/file-progress`

![eslint-plugin-file-progress](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/eslint-plugin-file-progress?filename=eslint%2Fpackage.json)

Show the file progress when linting.

## `@wowissu/eslint/import`

![eslint-plugin-import](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/eslint-plugin-import?filename=eslint%2Fpackage.json)

Plugin of eslint-plugin-import can order & lint your import

## `@wowissu/eslint/ts`

![typescript](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/typescript?filename=eslint%2Fpackage.json)
![@typescript-eslint/eslint-plugin](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/@typescript-eslint/eslint-plugin?filename=eslint%2Fpackage.json)
![@typescript-eslint/parser](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/@typescript-eslint/parser?filename=eslint%2Fpackage.json)

Rules of typescript. extends with

```javascript
'plugin:@typescript-eslint/eslint-recommended'
'plugin:@typescript-eslint/recommended'
```

## `@wowissu/eslint/vue`

![eslint-plugin-vue](https://img.shields.io/github/package-json/dependency-version/wowissu/dev/eslint-plugin-vue?filename=eslint%2Fpackage.json)

Rules of vue, extends with

```javascript
'plugin:vue/recommended'
```
