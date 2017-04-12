document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);
  //
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.fill();
  ctx.stroke();
});
