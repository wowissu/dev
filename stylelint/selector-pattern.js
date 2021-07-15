"use strict";

module.exports = {
  rules: {
    "selector-class-pattern": ["^([a-z0-9]{1}[a-zA-Z0-9]{0,}(\\_{2})?)+([a-zA-Z]{0,}\\-{2}[a-z0-9]{1}[a-zA-Z0-9]{0,}){0,}$", {
      message: "please follow as ex: .foo, .foo__bar, .foo--bar",
      resolveNestedSelectors: true
    }],
    "selector-id-pattern": ["([a-z]+[a-zA-Z0-9]{0,}(\\-[a-z0-9]+)+)", {
      message: "please follow as ex: #foo, #foo-bar",
    }],
    "keyframes-name-pattern": ["([a-z]+[a-zA-Z0-9]{0,}(\\-[a-z0-9]+)+)", {
      message: "please follow as ex: @keyframes foo {}, @keyframes foo-bar {}",
    }]
  }
}
