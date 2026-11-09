import { describe, it, expect } from 'vitest';
import { greet } from './greeting.js';

describe('greet', () => {
  it('greets Anna', () => {
    expect(greet('Anna')).toBe('Hello, Anna!');
  });
});
