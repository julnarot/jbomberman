
let circleX = 50;
let circleY = 50;
let step = 50;

function setup() {
  createCanvas(600, 600);
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  circleX = 0;
}

function draw() {
  background(0);
  circle(circleX, circleY, 64);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    circleY = circleY - step;
  } else if (keyCode === DOWN_ARROW) {
    circleY = circleY + step;
  } else if (keyCode === RIGHT_ARROW) {
    circleX = circleX + step;
  } else if (keyCode === LEFT_ARROW) {
    circleX = circleX - step;
  }
}