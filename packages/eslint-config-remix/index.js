/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "node",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
