import { it, expect } from 'vitest';
import { ageCategory } from './cheese.js';

it('0 weeks is mild', () => {
  expect(ageCategory(0)).toBe('mild');
});
