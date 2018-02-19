var x = 210;
var y = 290;
var r = 0;

var ySpeed = [];

ySpeed[0] = 5;

function setup() {
  createCanvas(400, 400);
   for (var index = 0; index < 100; index = index + 1) {
  x[index] = random(0,400);
  y[index] = random(0,400);
}
}
  
function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
      rect(x, y, x[index], y[index]);
          y[index] = y[index] + ySpeed[index];

      if (y[index] > height) {
        
        // reset
        y[index] = 0;
      }

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  push();
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);
  pop();
  
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
  }
}
