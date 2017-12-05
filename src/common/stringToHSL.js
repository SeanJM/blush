import rgbToHsl from "./rgbToHsl";
import hexToRgb from "./hexToRgb";

const RGB = /^rgb\(([0-9\.\s]+),([0-9\.\s]+),([0-9\.\s]+)\)$/;
const HSL = /^hsl\(([0-9\.\s]+),([0-9\.\s]+)%(\s+|),([0-9\.\s]+)%(\s+|)\)$/;
const HEX = /^#([0-9a-zA-Z]+)$/;

export default function stringToHSL(string) {
  if (RGB.test(string)) {
    return rgbToHsl.apply(null, RGB.exec(string).map(a => Number(a.trim())));
  } else if (HSL.test(string)) {
    return HSL.exec(string).map((a, i) => i === 0 ? Number(a) : Number(a / 100));
  } else if (HEX.test(string)) {
    return rgbToHsl.apply(null, hexToRgb(string));
  }
}
