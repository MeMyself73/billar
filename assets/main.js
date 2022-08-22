class Mesa {
  constructor() {
    this.tapeteX = 0;
    this.tapeteY = 0;
    this.largo = 800;
    this.ancho = 400;
    this.tapeteColor = {r:35, g:111, b:32};
    this.tapeteBorde = 60;
    this.tapeteBordeColor = {r:111, g:64, b:32};
  }
  dibujarTapete() {
    fill(this.tapeteColor.r,this.tapeteColor.g,this.tapeteColor.b);
    stroke(this.tapeteBordeColor.r,this.tapeteBordeColor.g,this.tapeteBordeColor.b);
    strokeWeight(this.tapeteBorde);
    rect(this.tapeteX, this.tapeteY, this.largo, this.ancho);
  }
}

let mesa = new Mesa();

function setup() {
  createCanvas(800, 400);
  frameRate(60);
}
function draw() {
  background(1);
  mesa.dibujarTapete();
  //   fill(35, 111, 32);
  //   strokeWeight(60);
  //   stroke(111, 64, 32);
  //   rect(0, 0, 800, 400);
  //   fill(0);
  //   noStroke();
  //   circle(25, 25, 28);
  //   circle(400, 20, 28);
  //   circle(775, 25, 28);
  //   circle(775, 375, 28);
  //   circle(400, 380, 28);
  //   circle(25, 375, 28);
}
