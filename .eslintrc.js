module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'no-alert': 'off',
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-debugger': 'off',
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
        next: '*',
      },
      { blankLine: 'any', prev: ['import'], next: ['import'] },
    ],
  },
  ignorePatterns: ['dist/*', '.eslintrc.js', 'webpack.config.js', 'src/services/*'],
};
