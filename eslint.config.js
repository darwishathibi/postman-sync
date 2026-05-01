// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'lib',
  typescript: true,
  ignores: [
    '**/dist/**',
    '**/coverage/**',
    '**/node_modules/**',
    'pnpm-lock.yaml',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  rules: {
    // `export {}` is intentional in placeholder modules during scaffolding.
    'ts/no-empty-object-type': 'off',
    'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
});
