require("@zmrl/eslint-config/patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@zmrl"],
  ignorePatterns: ["dist", "CHANGELOG.md"],
};
