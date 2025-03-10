import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefdatah from 'eslint-plugin-react-refdatah'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignodata: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refdatah': reactRefdatah,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refdatah/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
