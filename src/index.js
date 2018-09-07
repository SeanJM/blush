import hslToRgb    from "./common/hslToRgb";
import rgbToHex    from "./common/rgbToHex";
import rgbToHsl    from "./common/rgbToHsl";
import rgbToCMYK   from "./common/rgbToCMYK";
import cmykToRgb   from "./common/cmykToRgb";
import stringToHSL from "./common/stringToHSL";
import slope       from "./common/slope";

class Blush {
  constructor(x) {
    this.__alpha     = 1;
    this.__rotate    = 0;
    this.__saturate  = 0;
    this.__lightness = 0;
    this.__hsl       = [ 0, 0, 0 ];

    if (x instanceof Blush) {
      Object.assign(this, x);
    } else if (typeof x === "string") {
      this.__hsl = stringToHSL(x);
    }
  }

  setAlpha(p) {
    this.__alpha = p;
    return this;
  }

  setHue(n) {
    this.__hsl[0] = Math.max(0, Math.min(360, n)) / 360;
    return this;
  }

  setSaturation(n) {
    this.__hsl[1] = Math.max(0, Math.min(1, n));
    return this;
  }

  setLightness(n) {
    this.__hsl[2] = Math.max(0, Math.min(1, n));
    return this;
  }

  getAlpha() {
    return this.__alpha;
  }

  getHue() {
    return this.__hsl[0] * 360;
  }

  getSaturation() {
    return this.__hsl[1];
  }

  getLightness() {
    return this.__hsl[2];
  }

  lighten(p) {
    this.__lightness += p;
    return this;
  }

  darken(p) {
    this.__lightness -= p;
    return this;
  }

  desaturate(p) {
    this.__saturate -= p;
    return this;
  }

  saturate(p) {
    this.__saturate += p;
    return this;
  }

  rotate(p) {
    this.__rotate += p / 360;
    return this;
  }

  mix(color, amount) {
    const a    = rgbToCMYK.apply(null, new Blush(color).rgbArray());
    const b    = rgbToCMYK.apply(null, this.rgbArray());
    const c    = a.map((x, i) => slope(b[i], x, amount));
    this.__hsl = rgbToHsl.apply(null, cmykToRgb.apply(null, c));
    return this;
  }

  copy() {
    return new Blush(this);
  }

  applyHsl() {
    const hsl = this.__hsl.slice();

    while (hsl[0] + this.__rotate < 0) {
      this.__rotate += 1;
    }

    while (hsl[0] + this.__rotate > 1) {
      this.__rotate -= 1;
    }

    hsl[0] = Math.max(0, Math.min(1, hsl[0] + this.__rotate));
    hsl[1] = Math.max(0, Math.min(1, hsl[1] + this.__saturate));
    hsl[2] = Math.max(0, Math.min(1, hsl[2] + this.__lightness));

    return hsl;
  }

  applyHslString() {
    const hsl = this.applyHsl();
    return [
      Math.round(hsl[0] * 360),
      Math.round(hsl[1] * 100) + "%",
      Math.round(hsl[2] * 100) + "%"
    ];
  }

  rgbArray() {
    return hslToRgb.apply(null, this.applyHsl());
  }

  rgba() {
    return "rgba(" + this.rgbArray().concat(this.__alpha).join(", ") + ")";
  }

  rgb() {
    return "rgb(" + this.rgbArray().join(", ") + ")";
  }

  hsl() {
    return "hsl(" + this.applyHslString().join(", ") + ")";
  }

  hsla() {
    return "hsla(" + this.applyHslString().concat(this.__alpha).join(", ") + ")";
  }

  hex() {
    return rgbToHex.apply(null, hslToRgb.apply(null, this.applyHsl()));
  }

  hexa() {
    return this.hex() + Math.round(this.__alpha * 255).toString(16);
  }
}

export default function blush(x) {
  return new Blush(x);
}