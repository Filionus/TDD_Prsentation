export function ageCategory(weeks) {
  if (weeks >= 52) return 'vintage';
  if (weeks >= 40) return 'extra mature';
  if (weeks >= 26) return 'mature';
  if (weeks >= 12) return 'medium';
  return 'mild';
}
