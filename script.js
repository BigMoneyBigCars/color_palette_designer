"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("Init Function");
  start();
}

let selectedColorHex;
const HTML = [];

let hexCode;

let color1H = 0;
let color1S = 0;
let color1L = 0;
let color2H = 0;
let color2S = 0;
let color2L = 0;
let color4H = 0;
let color4S = 0;
let color4L = 0;
let color5H = 0;
let color5S = 0;
let color5L = 0;

function start() {
  console.log("Start function works");

  HTML.colorPicker = document.querySelector("#selectColor");

  HTML.baseColor = document.querySelector(".color_box3");

  HTML.color1 = document.querySelector(".color_box1");
  HTML.color2 = document.querySelector(".color_box2");
  HTML.color4 = document.querySelector(".color_box4");
  HTML.color5 = document.querySelector(".color_box5");

  document.querySelector("#analogous").addEventListener("click", () => {
    console.log("analogous function is being called");
    analogous();
  });

  document.querySelector("#monochromatic").addEventListener("click", () => {
    console.log("monochromatic function is being called");
    monochromatic();
  });

  document.querySelector("#triad").addEventListener("click", () => {
    console.log("triad function is being called");
    triad();
  });

  document.querySelector("#complementary").addEventListener("click", () => {
    console.log("complementary function is being called");
    complementary();
  });

  document.querySelector("#compound").addEventListener("click", () => {
    console.log("compound function is being called");
    compound();
  });

  document.querySelector("#shades").addEventListener("click", () => {
    console.log("shades function is being called");
    shades();
  });

  HTML.colorPicker.addEventListener("input", showColor);
}

function monochromatic() {
  console.log("monochromatic function works");
  color1H = 0;
  color1S = 0;
  color1L = 20;

  color2H = 0;
  color2S = 0;
  color2L = 10;

  color4H = 0;
  color4S = 0;
  color4L = 10;

  color5H = 0;
  color5S = 0;
  color5L = 20;
  showColor();
}

function analogous() {
  color1H = 40;
  color1S = 0;
  color1L = 0;

  color2H = 20;
  color2S = 0;
  color2L = 0;

  color4H = 20;
  color4S = 0;
  color4L = 0;

  color5H = 40;
  color5S = 0;
  color5L = 0;
  showColor();
  console.log("analogous function works");
}

function triad() {
  color1H = 120;
  color1S = 0;
  color1L = 0;

  color2H = 120;
  color2S = 0;
  color2L = 20;

  color4H = 120;
  color4S = 0;
  color4L = 20;

  color5H = 120;
  color5S = 0;
  color5L = 0;
  showColor();
  console.log("triad function works");
}

function complementary() {
  color1H = 0;
  color1S = 0;
  color1L = 10;

  color2H = 0;
  color2S = 0;
  color2L = 20;

  color4H = 180;
  color4S = 0;
  color4L = 20;

  color5H = 180;
  color5S = 0;
  color5L = 0;
  showColor();
  console.log("complementary function works");
}
function compound() {
  console.log("compound function works");
  color1H = 40;
  color1S = 0;
  color1L = 0;

  color2H = 20;
  color2S = 0;
  color2L = 0;

  color4H = 200;
  color4S = 0;
  color4L = 20;

  color5H = 180;
  color5S = 0;
  color5L = 0;
  showColor();
}
function shades() {
  console.log("shades function works");
  color1H = 0;
  color1S = 0;
  color1L = 40;

  color2H = 0;
  color2S = 0;
  color2L = 20;

  color4H = 0;
  color4S = 0;
  color4L = 20;

  color5H = 0;
  color5S = 0;
  color5L = 40;
  showColor();
}

function showColor() {
  hexCode = HTML.colorPicker.value;

  document.querySelector(".color_box1").style.backgroundColor = hexCode;

  showHSL(convertRGBtoHSL(convertHEXtoRGB(hexCode)));
}

function showHSL(hsl) {
  document.querySelector(".color_box1>.hsl").textContent = `HSL(${hsl.h - color1H}, ${hsl.s - color1S}%, ${hsl.l - color1L}%)`;
  document.querySelector(".color_box2>.hsl").textContent = `HSL(${hsl.h - color2H}, ${hsl.s - color2S}%, ${hsl.l - color2L}%)`;
  document.querySelector(".color_box3>.hsl").textContent = `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  document.querySelector(".color_box4>.hsl").textContent = `HSL(${hsl.h + color4H}, ${hsl.s + color4S}%, ${hsl.l + color4L}%)`;
  document.querySelector(".color_box5>.hsl").textContent = `HSL(${hsl.h + color5H}, ${hsl.s + color5S}%, ${hsl.l + color5L}%)`;

  HTML.color1.style.backgroundColor = `HSL(${hsl.h - color1H}, ${hsl.s - color1S}%, ${hsl.l - color1L}%)`;
  HTML.color2.style.backgroundColor = `HSL(${hsl.h - color2H}, ${hsl.s - color2S}%, ${hsl.l - color2L}%)`;
  HTML.baseColor.style.backgroundColor = `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  HTML.color4.style.backgroundColor = `HSL(${hsl.h + color4H}, ${hsl.s + color4S}%, ${hsl.l + color4L}%)`;
  HTML.color5.style.backgroundColor = `HSL(${hsl.h + color5H}, ${hsl.s + color5S}%, ${hsl.l + color5L}%)`;

  document.querySelector(".color_box1>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).r}, ${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).g}, ${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).b})`;
  document.querySelector(".color_box2>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).r}, ${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).g}, ${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).b})`;
  document.querySelector(".color_box3>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).r}, ${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).g}, ${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).b})`;
  document.querySelector(".color_box4>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).r}, ${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).g}, ${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).b})`;
  document.querySelector(".color_box5>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).r}, ${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).g}, ${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).b})`;

  document.querySelector(".color_box1>.hex").textContent = `HEX ${convertHSLtoHEX(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).toUpperCase()}`;
  document.querySelector(".color_box2>.hex").textContent = `HEX ${convertHSLtoHEX(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).toUpperCase()}`;
  document.querySelector(".color_box3>.hex").textContent = `HEX ${convertHSLtoHEX(hsl.h, hsl.s, hsl.l).toUpperCase()}`;
  document.querySelector(".color_box4>.hex").textContent = `HEX ${convertHSLtoHEX(hsl.h - color4H, hsl.s - color4S, hsl.l - color4L).toUpperCase()}`;
  document.querySelector(".color_box5>.hex").textContent = `HEX ${convertHSLtoHEX(hsl.h - color5H, hsl.s - color5S, hsl.l - color5L).toUpperCase()}`;
}

function convertHEXtoRGB(hex) {
  const r = Number.parseInt(hex.substring(1, 3), 16);
  const g = Number.parseInt(hex.substring(3, 5), 16);
  const b = Number.parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function convertRGBtoHSL(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = Math.floor(h);
  s = Math.floor(s);
  l = Math.floor(l);

  return { h, s, l };
}

//STOLEN FROM https://css-tricks.com/converting-color-spaces-in-javascript/
function convertHSLtoRGB(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

//STOLEN FROM https://css-tricks.com/converting-color-spaces-in-javascript/
function convertHSLtoHEX(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

/* 

const style = document.createElement("style");
document.head.appendChild(style);

function start() {
  console.log(style);
  HTML.colorPicker = document.querySelector("#selectColor");
  HTML.colorBox = document.querySelector("#three");
  HTML.colorPicker.addEventListener("input", showColor);
  console.log(HTML.colorBox);
}

function showColor() {
  selectedColor = HTML.colorPicker.value;

  document.querySelector("#three").textContent = "HEX: " + selectedColor;
  console.log(selectedColor);

  HTML.colorBox.dataset.color_selected = selectedColor;

  style.sheet.insertRule(
    `[data-color_selected="${selectedColor}"] {--selected_color: ${selectedColor}}`
  );

  console.log(HTML.colorPicker.value);

  // document.querySelector("#one").style.backgroundColor = selectedColor;
}

function showRGB() {
  let r, g, b;

  let hex = selectedColor;

  console.log(hex);

  r = hex.substring(1, 3);
  g = hex.substring(3, 5);
  b = hex.substring(5, 7);

  console.log(r, g, b);

  r = parseInt(r, 16);
  g = parseInt(b, 16);
  b = parseInt(g, 16);

  console.log(r, b, g);
  document.querySelector("#rbg").textContent = `RBG: (${r},${b},${g})`;

  showHSL(r, g, b);
}

function showHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log(h, s, l); // just for testing

  h = Math.round((h * 100) / 100);
  s = Math.round((s * 100) / 100);
  l = Math.round((l * 100) / 100);

  document.querySelector("#hsl").textContent = `HSL: (${h},${s},${l})`;
}
 */
