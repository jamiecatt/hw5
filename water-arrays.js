var x = 230;
var y = 220;
var ySpeed = [];
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
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
