require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@maanu-devtools/eslint-config-node",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  overrides: [
    {
      settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
            moduleDirectory: ["node_modules", "src/"],
          },
        },
      },
    },
  ],
};
