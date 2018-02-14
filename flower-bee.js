var x = 210;
var y = 290;
var r = 0;
var a = 205;
var b = 205;


function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(255);
  noStroke();
	
	//Petals
	
	rect(175, 205, 20,20);
	rect(175, 175, 20,20);
	rect(205, 175, 20,20);
	rect(197.5, 205,5, 205);

  // Stem
  fill(255, 130, 15);
  ellipse(200, 200, 20, 20);

  // Rotate Bee
  push();
  fill(230, 165, 0);
  translate(x, y);
  rotate(r);
  ellipse(55, -105, 15, 15);
  pop();
	
   // Fall Petal
  rect(a, b, 20, 20);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  b = b + 3
  
  // if invisible for a full “height” amount…
  if (b > height*2) {
    // reset
    b = 220;
  }
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -200) {
    y = 210;
  }
}
