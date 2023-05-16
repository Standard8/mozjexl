module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: "*.mjs",
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
