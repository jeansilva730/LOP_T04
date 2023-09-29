var rect_color;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(220);
  rectMode(CENTER);
  if ( (mouseX >= 250 && mouseX <= 350) && (mouseY >= 180 && mouseY <= 210)) {
    rect_color = "black";
  } else {
    rect_color = "red";
  }
  fill(rect_color);
  rect(300, 200, 100, 30);
  fill("blue");
  rect(300, 240, 100, 30);
  // console.log("Redrawing");
  text(debugText, 10, 20);
}
