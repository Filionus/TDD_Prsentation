import { describe, it, expect } from 'vitest';
import { ageCategory, isReadyToSell } from './cheese.js';

describe('ageCategory', () => {
  it.each([
    [0, 'mild'], [11, 'mild'],
    [12, 'medium'], [25, 'medium'],
    [26, 'mature'], [39, 'mature'],
    [40, 'extra mature'], [51, 'extra mature'],
    [52, 'vintage'], [200, 'vintage'],
  ])('%i weeks is %s', (weeks, label) => {
    expect(ageCategory(weeks)).toBe(label);
  });

  it('rejects negative weeks', () => {
    expect(() => ageCategory(-1)).toThrow(RangeError);
  });

  it('rejects NaN', () => {
    expect(() => ageCategory(NaN)).toThrow(RangeError);
  });
});

describe('isReadyToSell', () => {
  it('is not ready at 3 weeks', () => {
    const now = () => Date.parse('2026-10-13');
    const batch = { producedAt: Date.parse('2026-09-22') };
    expect(isReadyToSell(batch, now)).toBe(false);
  });

  it('is ready at 14 weeks', () => {
    const now = () => Date.parse('2026-10-13');
    const batch = { producedAt: Date.parse('2026-07-07') };
    expect(isReadyToSell(batch, now)).toBe(true);
  });
});
