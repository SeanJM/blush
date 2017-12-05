import hslToRgb    from "./common/hslToRgb";
import rgbToHex    from "./common/rgbToHex";
import stringToHSL from "./common/stringToHSL";

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

  alpha(p) {
    this.__alpha = p;
    return this;
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

  copy() {
    return new Blush(this);
  }

  applyHsl() {
    const hsl = this.__hsl.slice();

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
}

export default function blush(x) {
  return new Blush(x);
}