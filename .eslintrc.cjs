/**
 * Configuration file for ESLint.
 * @type {import("eslint").Linter.Config}
 */

const EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx"
];

module.exports = {
  // Apply these configurations for TypeScript files
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      files: [
        "*.ts",
        "*.tsx"
      ],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],

  // Specify the parser that ESLint should use for your code
  // parser: "@typescript-eslint/parser",

  // Use these ESLint plugins
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
  ],

  // Extend these ESLint configurations
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    // "plugin:import/recommended",
  ],

  // Specify custom rules for your project
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: "last",
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "indent": ["error", 2],
    "max-len": [
      "error",
      {
        code: 1000,
        comments: 1000,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 4,
      },
    ],
    "no-console": "off",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": ["error"],
    "no-use-before-define": "error",
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true,
      },
    ],
    "prefer-const": "error",
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    'jsx-quotes': [
      "error",
      "prefer-double"
    ],
    "semi": "warn",
    "space-in-parens": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: EXTENSIONS,
      },
    ],

    // Custom rule from @typescript-eslint plugin
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
  },
  // Specify global variables, parser options, and settings for your project
  settings: {
    // Sort package.json files using the standard sort order
    "json/sort-package-json": "standard",

    // Ignore package-lock.json files when linting
    "json/ignore-files": ["**/package-lock.json"],

    // Parse JSON files with comments and include .tsconfig.json and .vscode/* files
    "json/json-with-comments-files": ["**/tsconfig.json", ".vscode/**"],

    // Use the version of React detected in your project
    "react": {
      version: "detect",
    },
    // Use a custom resolver for aliases in import statements
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        // Define your aliases as key-value pairs
        alias: {
          "@/src": "./src",
          "@/components": "./components",
          "@/services": "./services",
          "@/utils": "./utils",
          "@/pages": "./pages",
          "@/data": "./data",
          "@/enums": "./enums",
          "@/server": "./server",
          "@/schema": "./schema",
          "@/errors": "./errors",
        },
        // Specify the file extensions to resolve (e.g. ".js", ".ts", etc.)
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ],
        // Specify the directories to search for packages when using import statements
        packages: ["packages/*"],
      },
    },
  },
};
