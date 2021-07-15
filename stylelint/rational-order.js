"use strict";

module.exports = {
  "extends": [
    "stylelint-config-rational-order"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-config-rational-order/plugin"
  ],
  "rules": {
    "order/properties-order": [],
    "order/properties-alphabetical-order": null,
    "plugin/rational-order": [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": false,
    }]
  }
}