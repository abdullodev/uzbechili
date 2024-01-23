module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-ts-comment": {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": false,
      "ts-nocheck": true,
      "ts-check": false,
      minimumDescriptionLength: 3,
    },
  },
};
