const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  //console.log(x, y);
}

function onMouseDown(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  painting = true;
  console.log(x, y, painting);
}

function onMouseUp(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  painting = false;
  console.log(x, y, painting);
}
function onMouseLeave(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
