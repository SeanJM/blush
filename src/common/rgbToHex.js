function p(n) {
  n = n.toString(16);
  return n.length === 2 ? n : 0 + n;
}

export default function rgbToHex(r, g, b) {
  return "#" + p(r) + p(g) + p(b);
}