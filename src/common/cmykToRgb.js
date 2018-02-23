function convert(x) {
  return Math.round((1 - x) * 255 + 0.5);
}

export default function cmykToRgba(c, m, y, k) {
  return [
    convert(c * (1 - k) + k),
    convert(m * (1 - k) + k),
    convert(y * (1 - k) + k)
  ];
}