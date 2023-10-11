// Tamanho da Tela (w = Largura, H = Altura)
const CANVAS_X = 600;
const CANVAS_Y = 400;
// Centro da tela
const SCREEN_CENTER_X = CANVAS_X / 2; // Largura/Centro tela
const SCREEN_CENTER_Y = CANVAS_Y / 2; // Altura/Centro tela
const MENU_START = "Iniciar";
const MENU_CONTROLLERS = "Controles";
const MENU_CREDITS = "Créditos";
// Variável de controle de tela
var screen_is = "MENU";
// Cores iniciais dos botões
var btn_start_color = "green";
var btn_start_text = "white";
var btn_controllers_color = "blue";
var btn_controllers_text = "white";
var btn_credits_color = "blue";
var btn_credits_text = "white";
// Variável de controle para o mouse
var btn_mouse_moved = 0;


/*
function actor(){
  ellipseMode()
}
*/

function changeScreen() {
  if (screen_is == 'MENU'){
    menu();
  } else if (screen_is == 'INICIAR'){
    levels();
  }
}

function menu() {
  // Definição do tamanho dos botões proporcional
  // ao tamanho da tela
  var BTN_W = CANVAS_X * 0.25; // Largura do botão
  var BTN_H = CANVAS_Y * 0.10; // Altura do botão
  // Start button
  fill(btn_start_color);
  if (btn_mouse_moved === 1){
    fill('red');
  }
  rect(SCREEN_CENTER_X, SCREEN_CENTER_Y, BTN_W, BTN_H);
  fill(btn_start_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_START, SCREEN_CENTER_X, SCREEN_CENTER_Y + 8, BTN_W, BTN_H);
  // Controllers button
  fill(btn_controllers_color);
  if (btn_mouse_moved === 2){
    fill('red');
  }
  rect(SCREEN_CENTER_X, SCREEN_CENTER_Y + 50, BTN_W, BTN_H);
  fill(btn_controllers_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_CONTROLLERS, SCREEN_CENTER_X, SCREEN_CENTER_Y + 58, BTN_W, BTN_H);
  // Créditos button
  fill(btn_credits_color);
  if (btn_mouse_moved === 3){
    fill('red');
  }
  rect(SCREEN_CENTER_X, SCREEN_CENTER_Y + 100, BTN_W, BTN_H);
  fill(btn_credits_text);
  textAlign(CENTER);
  textSize((BTN_W + BTN_H) / 6);
  text(MENU_CREDITS, SCREEN_CENTER_X, SCREEN_CENTER_Y + 108, BTN_W, BTN_H);
  return 0;
}

function levels(){
  let lvl = 1;
  for (let y = 80; y <= 320; y += 80){
    for (let x = 80; x <= 320; x += 80){
      fill('orange');
      rect(x, y, 50);
      fill('black');
      textSize(16);
      text("Lv " + lvl, x, y);
      lvl++;
    }
  }
  fill("#8B8BEC");
  rect(500, 200, 75, 25);
  fill("black");
  text("Retornar", 500, 200);
}

function returnScreen(){
  if ( (mouseX > (500-75/2) && mouseX < (500+75/2)) && (mouseY > 175 && mouseY < (200+25/2)) ){
    screen_is = "MENU";
  }
}

function mouseMenu(){
  // Verifica se o mouse está em cima do botão 'Iniciar' 
  if ((mouseX > 220 && mouseX < 380) && (mouseY > 175 && mouseY < 225)) {
    screen_is = "INICIAR";
  }// Verifica se o mouse está em cima do botão 'Opções'
   else if ((mouseX > 220 && mouseX < 380) && (mouseY > 230 && mouseY < 272)) {
    screen_is = "CONTROLES";
  } // Verifica se o mouse está em cima do botão 'Créditos'
  else if ((mouseX > 220 && mouseX < 380) && (mouseY > 276 && mouseY < 323)) {
    screen_is = "CREDITOS";
  } else {
    screen_is = "MENU";
  }
}

function menuButtons(){
    // Verifica se o mouse está em cima do botão 'Iniciar' 
  if ((mouseX > 220 && mouseX < 380) && (mouseY > 175 && mouseY < 225)) {
    btn_mouse_moved = 1;
  }// Verifica se o mouse está em cima do botão 'Opções'
   else if ((mouseX > 220 && mouseX < 380) && (mouseY > 230 && mouseY < 272)) {
    btn_mouse_moved = 2;
  } // Verifica se o mouse está em cima do botão 'Créditos'
  else if ((mouseX > 220 && mouseX < 380) && (mouseY > 276 && mouseY < 323)) {
    btn_mouse_moved = 3;
  } else {
    btn_mouse_moved = 0;
  }
}

function debugMouse(){
  fill('black');
  textSize(16);
  text("X: " + mouseX + "\nY: " + mouseY + "\nTela: " + screen_is, 40, 20);
  // Cursor
  fill('white');
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseMoved(){
  // Se o mouse se mover, ele irá checar todas essas ações abaixo.
  menuButtons();
  // prevent default
  return false;
}

function mouseClicked(){
  // Verifica se o mouse está em cima do botão 'Iniciar' 
  if (screen_is === "MENU"){
    mouseMenu();
  }
  returnScreen();
  // prevent default
  return false;
}

function setup() {
  createCanvas(CANVAS_X, CANVAS_Y);
  rectMode(CENTER);
  noCursor();
}

function draw() {
  background(220);
  changeScreen();
  debugMouse();
}
