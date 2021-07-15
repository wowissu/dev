"use strict";

module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines"
  ],
  "plugins": [
		"stylelint-scss"
	],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-invalid-position-at-import-rule": null,
    "scss/at-import-partial-extension-blacklist": null,
  }
}