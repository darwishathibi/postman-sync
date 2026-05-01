import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: '@postman-sync/core',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      thresholds: {
        // Phase 2 raises this to 95.
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      },
    },
  },
});
