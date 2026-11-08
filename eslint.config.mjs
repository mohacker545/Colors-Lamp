
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["public/js/code.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        md5: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern:
            "^(doLogin|readCookie|doLogout|addColor|searchColor)$"
        }
      ]
    }
  },
  {
    files: ["public/js/md5.js"],
    linterOptions: {
      reportUnusedDisableDirectives: "off"
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];
