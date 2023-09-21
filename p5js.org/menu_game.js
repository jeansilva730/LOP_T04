const CANVAS_W = 600;
const CANVAS_H = 400;
const SCREEN_CENTER_W = CANVAS_W / 2; // Largura/Centro tela
const SCREEN_CENTER_H = CANVAS_H / 2; // Altura/Centro tela

/*
function actor(){
  ellipseMode()
}
*/

function menu() {
  const MENU_START = "Iniciar";
  const MENU_OPTIONS = "Opções";
  const MENU_CREDITS = "Créditos";
  const BTN_W = CANVAS_W * 0.25; // Largura do botão
  const BTN_H = CANVAS_H * 0.10; // Altura do botão
  var BTN_START_COLOR = "grey";
  var BTN_START_TEXT = "white";
  rectMode(CENTER);
  // Start button
  fill('grey');
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H, BTN_W, BTN_H);
  fill('white');
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_START, SCREEN_CENTER_W, SCREEN_CENTER_H + 8, BTN_W, BTN_H);
  // Options button
  fill('grey');
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H + 50, BTN_W, BTN_H);
  fill('white');
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_OPTIONS, SCREEN_CENTER_W, SCREEN_CENTER_H + 58, BTN_W, BTN_H);
  // Créditos button
  fill('grey');
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H + 100, BTN_W, BTN_H);
  fill('white');
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_CREDITS, SCREEN_CENTER_W, SCREEN_CENTER_H + 108, BTN_W, BTN_H);
  
  return 0;
}

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
}

function draw() {
  background(220);
  menu();
}
