
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  var x = 0;
  while(x <= width){
    fill(0,200, 255)
  ellipse(x, 100, 25, 25)
  x = x + 50;
  }

  for(var x = 0; x <= width; x += 50){
    for(var y = 0; y <= 500; y += 10){
      fill(y,y, y);
      ellipse(x, 300, 25, 25)
    }
  }

  fill(0,0, 200);
  ellipse(0, 350, 25, 25)

  fill(80,0, 200);
  ellipse(50, 350, 25, 25)

  fill(160,0, 200);
  ellipse(100, 350, 25, 25)
 
  fill(240,0, 200);
  ellipse(150, 350, 25, 25)
}

