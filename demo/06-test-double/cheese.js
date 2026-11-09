const WEEK_MS = 7 * 24 * 3600 * 1000;

const STAGES = [
  { from: 52, label: 'vintage' },
  { from: 40, label: 'extra mature' },
  { from: 26, label: 'mature' },
  { from: 12, label: 'medium' },
  { from: 0, label: 'mild' },
];

export function ageCategory(weeks) {
  if (!(weeks >= 0)) {
    throw new RangeError('weeks must be >= 0');
  }
  return STAGES.find((s) => weeks >= s.from).label;
}

export function isReadyToSell(batch, now = Date.now) {
  const weeks = (now() - batch.producedAt) / WEEK_MS;
  return ageCategory(Math.floor(weeks)) !== 'mild';
}
