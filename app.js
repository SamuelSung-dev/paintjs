const canvas = document.getElementById("jsCanvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const brushSize = document.getElementById("jsBrushSize");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseDown(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  startPainting();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function onMouseMove(event) {
  if (painting) {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseEnter(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}

function onMouseUp() {
  stopPainting();
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleBrushSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
}
document.body.addEventListener("mouseup", onMouseUp);
document.body.addEventListener("mousedown", startPainting);
if (colors) {
  Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}
if (brushSize) {
  brushSize.addEventListener("input", handleBrushSize);
}
//console.log(colors);
