import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import jest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest },
      parser: parser,
      parserOptions: { project: "./tsconfig.json" },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/member-delimiter-style": [
        "off",
        {
          multiline: {
            delimiter: "none",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions"],
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/prefer-for-of": ["warn"],
      "@typescript-eslint/prefer-function-type": ["warn"],"@typescript-eslint/quotes": [
  "error",
  "single",
  {
    "avoidEscape": true,
    "allowTemplateLiterals": true
  }
],
      "@typescript-eslint/semi": ["off", null],
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/typedef": "warn",
      "no-undef": "warn",
      semi: "error",
      "prefer-const": "error",
      "arrow-parens": ["off", "always"],
      "brace-style": ["off", "off"],
      "comma-dangle": ["error", "always-multiline"],
      "eol-last": "off",
      "import/order": "off",
      "jsdoc/no-types": "off",
      "linebreak-style": "off",
      "max-len": "off",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-case-declarations": "off",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-extra-semi": "off",
      "no-invalid-this": "warn",
      "no-irregular-whitespace": "off",
      "no-null/no-null": "off",
      "no-redeclare": "error",
      "no-trailing-spaces": "off",
      "no-void": "error",
      "one-var": ["off", "never"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "space-before-function-paren": "off",
      "space-in-parens": ["off", "never"],
  'prettier/prettier': [
    'warn',
    {
      singleQuote: true,
      semi: true,
    }
  ],
    },
  },
];
