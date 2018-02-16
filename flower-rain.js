var a = 230;
var b = 220;
var r = 0;

var x = [];
var y = [];
var ySpeed = [];

x[0] = 10;
y[0] = 10;
ySpeed[0] = 3;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var index = 0; index < 100; index = index + 1) {
  x[index] = random(0,400);
  y[index] = random(0,400);
  ySpeed[index] = random(3,5);
}
}

function draw() {
  background("gray");
  noStroke();

   rect(x, y, 1, 20);
    for (var index = 0; index < 100; index = index + 1) {
      rect(x[index], y[index], 1, 12);
      y[index] = y[index] + ySpeed[index];


      if (y[index] > height) {
        // reset
        y[index] = 0;
      }
    }
  // draw core
  ellipse(200, 200, 44, 44);


  //draw stem
  rect(200, 200, 5, 200);


  // draw petals
  rect(150, 150, 35, 35)
  rect(150, 200, 35, 35)
  rect(203, 147, 35, 35)


  // darker as it gets closer to 0
  push();
  fill(b);
  translate(a, b);
  rotate(r);
  rect(-10, -10, 35, 35);
  pop();

  // down 3 pixels
  b -= -3;

  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.04

  // if reach past the bottom
  if (b > 400) {
    b = 200;
    
   
  }
}
