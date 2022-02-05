module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',

    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint',

    'react',
    'react-hooks',
    'prettier',
    'jsx-a11y',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'arrow-parens': 'warn',
    'no-trailing-spaces': 'error',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'linebreak-style': 0,
  },
};
