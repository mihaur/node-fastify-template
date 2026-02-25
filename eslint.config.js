import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [
  js.configs.recommended,
  stylistic.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      'no-unused-vars': ['error', {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      }],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
    }
  }
]
