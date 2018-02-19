var a = [35, 25, 10];
var b = [35, 55, 30];

var a = [];
var b = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
    for (var index = 0; index < 100; index = index + 1) {
  a[index] = random(100,200);
  b[index] = random(300,100);
    }
}
  
function draw() {
  background(255);
  noStroke();
  
   for (var index = 0; index < 50; index = index + 1) {
      ellipse(a[index], b[index], a[1], b[1]);
   }
  // draw two ellipses
  fill(120, 60, 100);
  ellipse(a[0], a[1], a[2]);
  
  fill(240, 60, 100);
  ellipse(b[0], b[1], b[2]);
  
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    a[1] = random(10, 35);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    b[1] = random(10, 35);
  }
}
