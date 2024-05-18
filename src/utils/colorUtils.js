export function isDarkColor(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  const threshold = 128;

  return brightness < threshold;
}
