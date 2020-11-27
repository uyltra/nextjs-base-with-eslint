module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false }],
    'object-shorthand': ['error', 'always'],
    // JSX
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-literals': 'off',
    'react/prop-types': 'off',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
  },
  settings: {
    react: {
      version: '17.0.1',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          // ['@ui', './src/components/ui']
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
