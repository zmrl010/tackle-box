require("@zmrl/eslint-config/patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@zmrl"],
  overrides: [
    {
      files: ["spec/*.ts?(x)"],
      parserOptions: {
        project: "./spec/tsconfig.json",
      },
    },
  ],
};
