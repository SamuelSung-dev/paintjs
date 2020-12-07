const canvas = document.getElementById("jsCanvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const brushSize = document.getElementById("jsBrushSize");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;
let isFill = false;

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
  ctx.fillStyle = color;
}

function handleBrushSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

function handleModeClick() {
  if (isFill === true) {
    isFill = false;
    mode.innerText = "Fill";
  } else {
    isFill = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (isFill) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
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
if (mode) {
  mode.addEventListener("click", handleModeClick);
}
if (save) {
  save.addEventListener("click", handleSaveClick);
}
//console.log(colors);
