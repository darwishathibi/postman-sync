import { describe, it, expect } from 'vitest';
import * as core from './index.ts';

describe('@postman-sync/core', () => {
  it('exports a module', () => {
    expect(core).toBeDefined();
  });

  it('is a placeholder until Phase 2', () => {
    expect(Object.keys(core)).toEqual([]);
  });
});