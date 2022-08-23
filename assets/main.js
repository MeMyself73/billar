class Mesa {
  constructor() {
    this.tapeteX = 0;
    this.tapeteY = 0;
    this.largo = 800;
    this.ancho = 400;
    this.tapeteColor = { r: 35, g: 111, b: 32 };
    this.tapeteBorde = 80;
    this.tapeteBordeColor = { r: 111, g: 64, b: 32 };
    this.tronera1 = {x:40, y:40, D:35};
    this.tronera2 = {x:400, y:30, D:35};
    this.tronera3 = {x:760, y:40, D:35};
    this.tronera4 = {x:760, y:360, D:35};
    this.tronera5 = {x:400, y:370, D:35};
    this.tronera6 = {x:40, y:360, D:35};
  }
  dibujarTapete() {
    fill(this.tapeteColor.r, this.tapeteColor.g, this.tapeteColor.b);
    stroke(
      this.tapeteBordeColor.r,
      this.tapeteBordeColor.g,
      this.tapeteBordeColor.b
    );
    strokeWeight(this.tapeteBorde);
    rect(this.tapeteX, this.tapeteY, this.largo, this.ancho);
  }
  dibujarTronera(){
    noStroke();
    fill(0);
    circle(this.tronera1.x,this.tronera1.y,this.tronera1.D);
    circle(this.tronera2.x,this.tronera2.y,this.tronera2.D);
    circle(this.tronera3.x,this.tronera3.y,this.tronera3.D);
    circle(this.tronera4.x,this.tronera4.y,this.tronera4.D);
    circle(this.tronera5.x,this.tronera5.y,this.tronera5.D);
    circle(this.tronera6.x,this.tronera6.y,this.tronera6.D);
  }
}
class Blanca{
  constructor(){
    this.x = 200;
    this.y = 200;
    this.D = 25;
  }
  dibujar(){
    fill(255);
    circle(this.x, this.y,this.D);

  }
} 
class Taco{
  constructor(){
    this.x = 615;
    this.y = 197;
    this.largo = 200;
    this.ancho = 6;
  }
  dibujarTaco(){
    fill(111,35,22);
    rect(this.x,this.y,this.largo,this.ancho);
  }
  set(x,y){
    this.x = x+15;
    this.y = y-3;
  }
  rotar(alpha){
    rotate(alpha);
  }
}

let mesa = new Mesa();
let blanca = new Blanca();
let taco = new Taco();

function setup() {
  createCanvas(800, 400);
  frameRate(60);
}
function draw() {
  background(1);
  mesa.dibujarTapete();
  mesa.dibujarTronera();
  blanca.dibujar();
  taco.set(blanca.x,blanca.y);
  taco.dibujarTaco();
}
function mouseMoved(){
  let m = (mouseY-blanca.y) * (mouseX-blanca.x);
  let alpha = Math.atan(m);
  taco.rotar(alpha);
  console.log(alpha);
}
