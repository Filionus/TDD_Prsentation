export function greet(name) {
  const cleanName = name.trim();
  if (cleanName === '') {
    return 'Hello, stranger!';
  }
  return 'Hello, ' + cleanName + '!';
}
