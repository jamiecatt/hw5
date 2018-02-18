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
  x[index] = random(0,220);
  y[index] = random(0,220);
  ySpeed[index] = random(3,5);
}
}

function draw() {
  background("gray");
  noStroke();


   // draw pipe
  rect(0, 200, a, 20);
  
  // draw drip
  ellipse(a, b, 10);
  
      for (var index = 0; index < 100; index = index + 1) {
      ellipse(x[index], y[index], 10, 10);
      y[index] = y[index] + ySpeed[index];

      if (y[index] > height) {
        // reset
        y[index] = 220;
      }
    }

  // down 3 pixels
  b = b + 3;

  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.04

  // if reach past the bottom
  if (b > height*2) {
    b = 220;
    
   
  }
}
