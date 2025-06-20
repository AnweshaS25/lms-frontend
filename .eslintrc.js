/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended', // ✅ Integrates Prettier
  ],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    // Optional: Add custom rules here
  },
};
