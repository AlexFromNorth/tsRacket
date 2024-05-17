import { configBall } from "./config";
import { Ball, Racket } from "./types";

const canvas: HTMLElement | null = document.getElementById("canvas");
let ctx: CanvasRenderingContext2D | null;

const canvasWidth: number = 800;
const canvasHeight: number = 500;

const racket: Racket = {
  x: canvasWidth / 2  - 40,
  y: canvasHeight / 2,
  width: 80,
  height: 10,
  color: "red",
};


const ball:Ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2 - 10,
  vX: 1,
  vXmod: 1,
  vY: configBall.vYmax,
  width: 10,
  height: 10,
  color: "blue",
};

canvas?.addEventListener("mousemove", (el) => {
  racket.x = el.offsetX - racket.width / 2;
  ball.vXmod = el.movementX
});

if (canvas != null && canvas instanceof HTMLCanvasElement) {
  ctx = canvas.getContext("2d");

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

function setDefaultPosition() : void{
    ball.x = canvasWidth / 2;
    ball.y = canvasHeight / 2 - ball.height;
    ball.vX = 1
    ball.vY = configBall.vYmax

    racket.x = canvasWidth / 2 - racket.width/2
    racket.y = canvasHeight / 2
}

function ballDraw(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = ball.color;
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

  ball.x += ball.vX;
  ball.y -= ball.vY;

  ball.vY = ball.vY - configBall.vYmod;

  if (
    ball.y >= racket.y - racket.height &&
    ball.y <= racket.y &&
    ball.x >= racket.x &&
    ball.x <= racket.x + racket.width
  ) {
    ball.vY = configBall.vYmax;
    ball.vX = (ball.vX + ball.vXmod/2) /2 
  }
  else if (ball.x <= 0 || ball.x >= canvasWidth - ball.width) {
    ball.vX = -ball.vX;
  }
  else if(ball.y >= canvasHeight){
    setDefaultPosition()
  }
}

function drawCanvas() : void {
  if (ctx != null) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = `green`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = racket.color;
    ctx.fillRect(racket.x, racket.y, racket.width, racket.height);

    ballDraw(ctx);
  }
  requestAnimationFrame(drawCanvas);
}
drawCanvas();
