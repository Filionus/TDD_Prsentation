const STAGES = [
  { from: 52, label: 'vintage' },
  { from: 40, label: 'extra mature' },
  { from: 26, label: 'mature' },
  { from: 12, label: 'medium' },
  { from: 0, label: 'mild' },
];

export function ageCategory(weeks) {
  return STAGES.find((s) => weeks >= s.from).label;
}
