declare module "blush" {
  type Color = string | Blush;

  export class Blush {
    private __alpha: number;
    private __rotate: number;
    private __saturate: number;
    private __lightness: number;
    private __hsl: [number, number, number];

    /**
     * Sets the alpha value of the color
     * @param value A number between 0 and 1
     */
    setAlpha(value: number): this;

    /**
     * Sets the hue value of the color
     * @param value A number between 0 and 360
     */
    setHue(value: number): this;

    /**
     * Sets the saturation value of the color
     * @param value A number between 0 and 1
     */
    setSaturation(value: number): this;

    /**
     * Sets the lightness value of the color
     * @param value A number between 0 and 1
     */
    setLightness(value: number): this;

    /**
     * Gets the alpha value of the color
     */
    getAlpha(): number;

    /**
     * Gets the hue value of the color
     */
    getHue(): number;

    /**
     * Gets the saturation value of the color
     * @param value A number between 0 and 1
     */
    getSaturation(): number;

    /**
     * Gets the lightness value of the color
     */
    getLightness(): number;

    /**
     * Increases the lightness value by a number between 0 and 1
     * @param value A number between 0 and 1
     */
    lighten(value: number): this;

    /**
     * Decreases the lightness value by a number between 0 and 1
     * @param value A number between 0 and 1
     */
    darken(value: number): this;

    /**
     * Decreases the saturation value by a number between 0 and 1
     * @param value A number between 0 and 1
     */
    desaturate(value: number): this;

    /**
     * Increases the saturation value by a number between 0 and 1
     * @param value A number between 0 and 1
     */
    saturate(value: number): this;

    /**
     * Rotate the hue of a color by N degres
     * @param value A number between -360 and 360
     */
    rotate(value: number): this;

    /**
     * Mixes the blush color with the provided color
     * @param color The secondary color to mix
     * @param amount A number between 0 and 1
     */
    mix(color: Color, amount: number): this

    /**
     * Returns a new instance of Blush
     */
    copy(): Blush;

    /**
     * Returns an HSL array
     */
    applyHsl(): [number, number, number];

    /**
     * Returns an HSL array with the percentages converted to strings
     */
    applyHslString(): [number, string, string];

    /**
     * Returns an RGB array
     */
    rgbArray(): [number, number, number];

    /**
     * Returns an RGBa string, eg: rgba(...)
     */
    rgba(): string;

    /**
     * Returns an RGB string, eg: eg: rgb(...)
     */
    rgb(): string;

    /**
     * Returns an HSL string, eg: eg: hsl(...)
     */
    hsl(): string;

    /**
     * Returns an HSLa string, eg: eg: hsla(...)
     */
    hsla(): string;

    /**
     * Returns a hex value, eg: #ffffff
     */
    hex(): string;

    /**
     * Returns a hex with alpha value, eg: #ffffff80
     */
    hexa(): string;
  }

  export default function blush(color: Color): Blush;
}