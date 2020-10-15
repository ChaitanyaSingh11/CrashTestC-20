// creating car variables
var car, red, yellow, green, white;
var wall, wallImg;
var road;
var speed, weight;

function preload() {
  // different colors of car
  red = loadImage("red.png");
  yellow = loadImage("yellow.png");
  green = loadImage("green.png");
  white = loadImage("white.png");
  // loading wall and car image
  wallImg = loadImage("wall.png");
  road = loadImage("road.png");
}

function setup() {
  createCanvas(1600, 400);
  // creatiing car
  car = createSprite(150, 200);
  car.addImage("white", white);
  car.addImage("red", red);
  car.addImage("yellow", yellow);
  car.addImage("green", green);
  // creating wall
  wall = createSprite(1550, 190);
  wall.addImage("wallImg", wallImg);
  // random value for speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
}

function draw() {
  background(road);
  // detecting collision
  if (wall.x - car.x <= (car.width + wall.width) / 2) {
    // calculating deformation
    var Deformation = (0.5 * weight * speed * speed) / 22500;
    car.velocityX = 0;
    if (Deformation < 100 && Deformation > 0)
      car.changeImage("green", green);
    else if (Deformation > 100 && Deformation < 180)
      car.changeImage("yellow", yellow);
    else if (Deformation > 180)
      car.changeImage("red", red);
  }
  drawSprites();
}