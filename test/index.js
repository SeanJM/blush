const blush = require("../index.js");
const tinytest = require("tiny-test");

tinytest(function (test, load) {
  test("White", () => blush("#fff").hex())
    .isEqual(() => "#ffffff");

  test("Blue", () => blush("#0089e5").hex())
    .isEqual(() => "#0089e5");

  test("HexA", () => blush("#0089e5").setAlpha(0.5).hexa())
    .isEqual(() => "#0089e580");

  test("Darken white", () => blush("#fff").darken(0.1).hex())
    .isEqual(() => "#e6e6e6");

  test("Darken blue", () => blush("#0089e5").darken(0.1).hex())
    .isEqual(() => "#006ab2");

  test("Lighten blue", () => blush("#0089e5").lighten(0.1).hex())
    .isEqual(() => "#19a3ff");

  test("Lighten blue to RGB", () => blush("#0089e5").lighten(0.1).rgb())
    .isEqual(() => "rgb(25, 163, 255)");

  test("Lighten blue to HSL", () => blush("#0089e5").lighten(0.1).hsl())
    .isEqual(() => "hsl(204, 100%, 55%)");

  test("Lighten blue to HSLA", () => blush("#0089e5").lighten(0.1).hsla())
    .isEqual(() => "hsla(204, 100%, 55%, 1)");

  test("Lighten blue to RGBA", () => blush("#0089e5").lighten(0.1).rgba())
    .isEqual(() => "rgba(25, 163, 255, 1)");

  test("Darken blue to RGBA", () => blush("#0089e5").darken(0.1).rgba())
    .isEqual(() => "rgba(0, 106, 178, 1)");

  test("Darken blue (over drive)", () => blush("#0089e5").darken(100).rgba())
    .isEqual(() => "rgba(0, 0, 0, 1)");

  test("Lighten blue (over drive)", () => blush("#0089e5").lighten(100).rgba())
    .isEqual(() => "rgba(255, 255, 255, 1)");

  test("Adjust hue blue", () => blush("#0089e5").rotate(10).rgba())
    .isEqual(() => "rgba(0, 99, 229, 1)");

  test("Adjust hue blue (rotate -360)", () => blush("#1ce2da").rotate(-360).hex())
    .isEqual(() => "#1ce2da");

  test("Adjust hue blue (rotate -360)", () => blush("#1ce2da").rotate(-5).hex())
    .isEqual(() => "#1ce2ca");

  test("Mix colors (#0000ff, #ed1c24)", () => blush("#0000ff").mix("#ed1c24", 0.5).hex())
    .isEqual(() => "#7c0f8e");

  test("setAlpha 0", () => blush("#0000ff").setAlpha(0).rgba())
    .isEqual(() => "rgba(0, 0, 255, 0)");

  test("setAlpha 1", () => blush("#0000ff").setAlpha(1).rgba())
    .isEqual(() => "rgba(0, 0, 255, 1)");

  test("setHue 120", () => blush("#0000ff").setHue(120).hsl())
    .isEqual(() => "hsl(120, 100%, 50%)");

  test("setSaturation 0.4", () => blush("#0000ff").setSaturation(0.4).hsl())
    .isEqual(() => "hsl(240, 40%, 50%)");

  test("setLightness 0.4", () => blush("#0000ff").setLightness(0.4).hsl())
    .isEqual(() => "hsl(240, 100%, 40%)");

  load();
});
