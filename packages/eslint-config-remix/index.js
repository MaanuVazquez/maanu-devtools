require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@maanu-devtools/eslint-config-node",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "~": "./app",
        },
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
