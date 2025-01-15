import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "arrow-body-style": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "capitalized-comments": ["error", "always"],
      "no-var": "error",      
    }
  }
];