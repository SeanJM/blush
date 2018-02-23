const blush    = require("../index.js");
const tinytest = require("tiny-test");

tinytest(function (test, load) {
  test("White")
    .this(() => blush("#fff").hex())
    .isEqual(() => "#ffffff");

  test("Blue")
    .this(() => blush("#0089e5").hex())
    .isEqual(() => "#0089e5");

  test("Darken white")
    .this(() => blush("#fff").darken(0.1).hex())
    .isEqual(() => "#e6e6e6");

  test("Darken blue")
    .this(() => blush("#0089e5").darken(0.1).hex())
    .isEqual(() => "#006ab2");

  test("Lighten blue")
    .this(() => blush("#0089e5").lighten(0.1).hex())
    .isEqual(() => "#19a3ff");

  test("Lighten blue to RGB")
    .this(() => blush("#0089e5").lighten(0.1).rgb())
    .isEqual(() => "rgb(25, 163, 255)");

  test("Lighten blue to HSL")
    .this(() => blush("#0089e5").lighten(0.1).hsl())
    .isEqual(() => "hsl(204, 100%, 55%)");

  test("Lighten blue to HSLA")
    .this(() => blush("#0089e5").lighten(0.1).hsla())
    .isEqual(() => "hsla(204, 100%, 55%, 1)");

  test("Lighten blue to RGBA")
    .this(() => blush("#0089e5").lighten(0.1).rgba())
    .isEqual(() => "rgba(25, 163, 255, 1)");

  test("Darken blue to RGBA")
    .this(() => blush("#0089e5").darken(0.1).rgba())
    .isEqual(() => "rgba(0, 106, 178, 1)");

  test("Darken blue (over drive)")
    .this(() => blush("#0089e5").darken(100).rgba())
    .isEqual(() => "rgba(0, 0, 0, 1)");

  test("Lighten blue (over drive)")
    .this(() => blush("#0089e5").lighten(100).rgba())
    .isEqual(() => "rgba(255, 255, 255, 1)");

  test("Adjust hue blue")
    .this(() => blush("#0089e5").rotate(10).rgba())
    .isEqual(() => "rgba(0, 99, 229, 1)");

  test("Adjust hue blue (rotate -360)")
    .this(() => blush("#1ce2da").rotate(-360).hex())
    .isEqual(() => "#1ce2da");

  test("Adjust hue blue (rotate -360)")
    .this(() => blush("#1ce2da").rotate(-5).hex())
    .isEqual(() => "#1ce2ca");

  test("Mix colors (#0000ff, #ed1c24)")
    .this(() => blush("#0000ff").mix("#ed1c24", 0.5).hex())
    .isEqual(() => "#7c0f8e");

  load();
});
