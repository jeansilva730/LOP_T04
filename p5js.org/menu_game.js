const CANVAS_W= 400;
const CANVAS_H = 400;

/*
function actor(){
  ellipseMode()
}
*/
function menu() {
  const START = "Iniciar";
  const OPTIONS = "Opções";
  const CREDITS = "Créditos";
  const BTN_W = CANVAS_W * 0.25;
  const BTN_H = CANVAS_H * 0.10;
  rectMode(CENTER);
  rect(100, 100, BTN_W, BTN_H);
  return 0;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  menu();
}
