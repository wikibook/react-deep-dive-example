"use strict";

module.exports = {
  root: true,
  extends: [
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/frontend",
    "@titicaca/eslint-config-triple/prettier"
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
