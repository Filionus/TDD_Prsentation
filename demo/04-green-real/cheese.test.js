import { it, expect } from 'vitest';
import { ageCategory } from './cheese.js';

it.each([
  [0, 'mild'],
  [12, 'medium'],
  [26, 'mature'],
  [40, 'extra mature'],
  [52, 'vintage'],
])('%i weeks is %s', (weeks, label) => {
  expect(ageCategory(weeks)).toBe(label);
});
