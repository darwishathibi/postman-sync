import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: '@postman-sync/cli',
    include: ['src/**/*.test.ts'],
  },
});