# eslint

Add extend into extends for active the features.

```json
{
  // ...
  extends: [
    './node_modules/@wowissu/eslint/common',
    './node_modules/@wowissu/eslint/babel',
    './node_modules/@wowissu/eslint/file-progress'
  ],
  // ...
}
```

### ```@wowissu/eslint/common```

common js rules, must use this as base.

### ```@wowissu/eslint/babel```

babel

### ```@wowissu/eslint/file-progress```

Show the file progress when linting.


### ```@wowissu/eslint/ts```

rules of typescript. base with `plugin:@typescript-eslint/eslint-recommended`,`plugin:@typescript-eslint/recommended`

### ```@wowissu/eslint/vue```

rules of vue, base with `plugin:vue/recommended`


