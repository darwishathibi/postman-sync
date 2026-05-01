import { describe, expect, it } from 'vitest';
import * as cli from './index.js';

describe('@postman-sync/cli', () => {
  it('exports a module', () => {
    expect(cli).toBeDefined();
  });
});
