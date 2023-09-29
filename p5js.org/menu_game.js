// Tamanho da Tela (w = Largura, H = Altura)
const CANVAS_W = 600;
const CANVAS_H = 400;
// Centro da tela
const SCREEN_CENTER_W = CANVAS_W / 2; // Largura/Centro tela
const SCREEN_CENTER_H = CANVAS_H / 2; // Altura/Centro tela
var screen_is = "MENU";
// Cores iniciais dos botões
var btn_start_color = "grey";
var btn_start_text = "white";
var btn_options_color = "grey";
var btn_options_text = "white";
var btn_credits_color = "grey";
var btn_credits_text = "white";
// Variável de controle para o mouse
var value = 0;


/*
function actor(){
  ellipseMode()
}
*/

function menu() {
  const MENU_START = "Iniciar";
  const MENU_OPTIONS = "Opções";
  const MENU_CREDITS = "Créditos";
  // Definição do tamanho dos botões proporcional
  // ao tamanho da tela
  var BTN_W = CANVAS_W * 0.25; // Largura do botão
  var BTN_H = CANVAS_H * 0.10; // Altura do botão
  rectMode(CENTER);
  // Start button
  fill(btn_start_color);
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H, BTN_W, BTN_H);
  fill(btn_start_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_START, SCREEN_CENTER_W, SCREEN_CENTER_H + 8, BTN_W, BTN_H);
  // Options button
  fill(btn_options_color);
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H + 50, BTN_W, BTN_H);
  fill(btn_options_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_OPTIONS, SCREEN_CENTER_W, SCREEN_CENTER_H + 58, BTN_W, BTN_H);
  // Créditos button
  fill(btn_credits_color);
  rect(SCREEN_CENTER_W, SCREEN_CENTER_H + 100, BTN_W, BTN_H);
  fill(btn_credits_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_CREDITS, SCREEN_CENTER_W, SCREEN_CENTER_H + 108, BTN_W, BTN_H);
  
  return 0;
}

function debugMouse(){
  fill('black');
  textSize(16);
  text("X: " + mouseX + "\nY: " + mouseY, 40, 20);
  // Cursor
  fill('white');
  if (value === 1){ fill('orange');}
  ellipse(mouseX, mouseY, 10, 10);
}

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  noCursor();
}

function draw() {
  background(220);
  menu();
  debugMouse();
}

function mouseMoved(){
  // debug mouse
  if (mouseX > 200){
    value = 1;
  }
  // prevent default
  return false;
}
