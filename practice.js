// const Game = require("./game");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  // const game = new Game();
  // new GameView(game, ctx).start();

  // ctx.clearRect(0, 0, 500, 500);
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  ctx.fillStyle = "blue";
  let i = 0;
  while (i < 10) {
    ctx.beginPath();
    ctx.arc(
      500 * Math.random(), 500 * Math.random(), 50 * Math.random(), 0, 2 * Math.PI, true
    );
    ctx.fill();
    i++;
  }

  ctx.fillStyle = '#ccddff';
  ctx.beginPath();
  ctx.moveTo(50,20);
  ctx.lineTo(200,50);
  ctx.lineTo(145,71);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgb(0,128,0)';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(10,30);
  ctx.bezierCurveTo(50,90,159,-30,200,30);
  ctx.lineTo(200,90);
  ctx.lineTo(10,90);
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'black';
  ctx.stroke();
});
