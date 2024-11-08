import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: '@babel/eslint-parser', // Add the Babel parser
      parserOptions: {
        ecmaVersion: 2020, // or 'latest' if you're using newer ECMAScript features
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Ensure JSX parsing is enabled
        },
      },
    },
    plugins: {
      react,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: false}],
      strict: [1, 'safe'],
      'no-return-assign': 0,
      complexity: [1, 20],
      radix: [2, 'always'],
      semi: [2, 'always'],
      'no-extra-semi': 1,
      'semi-spacing': [2, {before: false, after: true}],
      'comma-dangle': ['error', 'always-multiline'],
      'max-params': [1, 4],
      'max-len': [1, 120, 4, {ignoreComments: true, ignoreUrls: true, ignoreStrings: true}],
      'max-nested-callbacks': [1, 3],
      'max-depth': [1, 10],
      'max-statements': [1, 40],
      'no-spaced-func': 2,
      'keyword-spacing': [
        2,
        {
          before: true,
          after: true,
          overrides: {
            function: {before: true, after: false},
            super: {before: true, after: false},
            switch: {before: true, after: true},
            if: {before: true, after: true},
            for: {before: true, after: true},
            while: {before: true, after: true},
            catch: {before: true, after: true},
          },
        },
      ],
      'no-multiple-empty-lines': [1, {max: 2, maxEOF: 1}],
      'space-before-blocks': 2,
      'space-in-parens': [2, 'never'],
      'spaced-comment': [
        'warn',
        'always',
        {
          exceptions: ['-', '+', '*'],
          markers: ['!', '!<', '/'],
        },
      ],
      'no-proto': 0,
      'no-labels': 1,
      'no-caller': 2,
      'no-throw-literal': 1,
      'no-else-return': 1,
      'no-empty-pattern': 2,
      'no-shadow': [
        1,
        {
          allow: ['resolve', 'reject', 'done', 'next', 'cb', 'i', 'err', 'error'],
        },
      ],
      'no-implicit-coercion': [1, {number: true, string: true}],
      'vars-on-top': 1,
      'no-use-before-define': 1,
      'no-undef-init': 2,
      'no-undef': 2,
      'wrap-iife': [2, 'inside'],
      'no-unused-expressions': [2, {allowShortCircuit: true}],
      'no-inner-declarations': [2, 'both'],
      'no-func-assign': 2,
      'no-eval': 1,
      'no-implied-eval': 1,
      'no-extend-native': 2,
      'no-native-reassign': 2,
      'no-shadow-restricted-names': 2,
      'no-extra-bind': 2,
      'no-new-wrappers': 2,
      'no-array-constructor': 2,
      'no-new-object': 2,
      'no-redeclare': [2, {builtinGlobals: true}],
      'no-new': 1,
      'no-with': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 1,
      'no-unreachable': 2,
      'no-fallthrough': 2,
      'default-case': 1,
      'no-duplicate-case': 2,
      'no-label-var': 2,
      'object-curly-spacing': [2, 'never'],
      eqeqeq: 'off',

      // React-specific rules
      'jsx-quotes': [2, 'prefer-single'],
      'react/jsx-boolean-value': 2,
      'react/jsx-curly-spacing': [2, 'never'],
      'react/jsx-equals-spacing': [2, 'never'],
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-undef': [2, {allowGlobals: true}],
      'react/jsx-tag-spacing': 2,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/self-closing-comp': 2,
      'no-nested-ternary': 2,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
