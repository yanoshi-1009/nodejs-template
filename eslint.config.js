//
import { defineConfig } from "eslint/config";
import cybozuEslintConfig from "@cybozu/eslint-config/flat/presets/node-typescript-prettier.js";

export default defineConfig([
  ...cybozuEslintConfig,
  {
    rules: {
      "n/no-unpublished-import": "off"
    },
    ignores: ["node_modules"]
  }
]);
