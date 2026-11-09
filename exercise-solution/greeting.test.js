import { describe, it, expect } from 'vitest';
import { greet } from './greeting.js';

describe('greet', () => {
  it('greets Anna', () => {
    expect(greet('Anna')).toBe('Hello, Anna!');
  });

  it('greets a stranger when the name is empty', () => {
    expect(greet('')).toBe('Hello, stranger!');
  });

  it('removes spaces around the name', () => {
    expect(greet('  Anna  ')).toBe('Hello, Anna!');
  });
});
