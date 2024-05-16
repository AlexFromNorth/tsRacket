import { Racket } from "./types";

const canvas: HTMLElement | null = document.getElementById("canvas");
let ctx: CanvasRenderingContext2D | null;

const canvasWidth:number = 800
const canvasHeight:number = 500

let racket: Racket = {
    x: canvasWidth/2,
    y: canvasHeight/2,
    width: 80,
    height: 10,
} 

canvas?.addEventListener('mousemove', (el)=>{
    console.log(el.offsetX)
    racket.x = el.offsetX
})

if (canvas != null && canvas instanceof HTMLCanvasElement) {
  ctx = canvas.getContext("2d");

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}



function drawCanvas() {
  if (ctx != null) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = `green`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = `red`;
    ctx.fillRect(racket.x - (racket.width/2), racket.y, racket.width, racket.height);
  }
  requestAnimationFrame(drawCanvas);
}
drawCanvas();
