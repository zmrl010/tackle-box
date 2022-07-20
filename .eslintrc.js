require("@zmrl/eslint-config/patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@zmrl"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        project: "./tsconfig.dev.json",
      },
    },
  ],
};
