// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import' // ← nuevo

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    // ← resolver TS para que "import/no-unresolved" respete paths de TS
    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
      },
    },
    plugins: {
      import: importPlugin, // ← nuevo
    },
    rules: {
      // Cae si el casing del import no coincide con el archivo (Linux/CI)
      'import/no-unresolved': ['error', { caseSensitive: true }],

      // opcional pero útil: permite args/vars iniciadas con "_" sin marcar error
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
