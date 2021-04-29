// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser', // will allow eslint to parse typescript files
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules, adds typescript specific lint rules
        'plugin:react/recommended', // React rules, adds react specific lint rules
        'plugin:react-hooks/recommended', // React hooks rules, extends to add react hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // include prettier rules into eslint
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off', 
        'prettier/prettier': ['error', {}, { usePrettier: true }],
      },
    },
  ],
};
