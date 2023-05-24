require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-undef": 0,
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/consistent-type-assertions": 0,
    "@typescript-eslint/no-non-null-assertion": 2,
    "@typescript-eslint/ban-ts-comment": 0,
    camelcase: 0,
    "import/no-cycle": [2, { ignoreExternal: true }],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "type",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "prefer-const": "error",
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
  },
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "~": "./src",
        },
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
