//Special Thanks to Daniel Shiffman For Teaching me this Stuff
//link to his Youtube Channel 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw'

let canvas;
let balls = [];
let gravity = 0.1;
let button ;
let bgcol ;
let h1;
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight );
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  bgcol = color(0, 119, 190);
  balls.push( new Ball( 100 ,200 , 25 , random(0, 255), random(0,255), random(0,255)));
  button = select('#go');
  button.mousePressed(changecol);
  h1 = select('h1');
  if (windowWidth < 400){
  	h1.style('font-size', '200%');
  }
}

function draw() {
  background(bgcol);
  for (let ball of balls){
  ball.show();
  ball.update();
  }
}
function changecol(){
	bgcol = color(random(255), random(255), random(255));
}
function mousePressed(){
  balls.push( new Ball ( mouseX , mouseY , 25, random(0, 255), random(0, 255), random(0, 255) ));
}
          

class Ball {
  constructor(x, y, r , colr , colg , colb ){
    this.x = x ;
    this.y = y ;
    this.r = r ;
    this.speed = 0 ;
    this.red = colr ;
    this.g = colg ;
    this.b = colb ;
  }
  show(){
    fill (this.red, this.g, this.b );
    circle(this.x , this.y , this.r );
  }
  update(){
    this.y = this.y + this.speed ;
    this.speed = this.speed + gravity ;
    if ( this.y > height ){
      this.y = height 
      this.speed = (this.speed * -0.985 ) ;
    }
  }
  
    
}
