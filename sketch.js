var bullet, wall, thickness, speed, weight, damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  rectMode(CENTER);
  
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(255, 255, 255);

  bullet.velocityX = speed;
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0, 0, 0);  

  if ( (wall.x - bullet.x) < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;

    if ((bullet.x + bullet.width/2) >= (wall.x - wall.width/2)) {
      bullet.x = wall.x - (wall.width/2) - (bullet.width/2);
    }
  
    if (damage > 10) {
      // Green
      wall.shapeColor = color(255, 0, 0);
    }

    else {
      // Red
      wall.shapeColor = color(0, 255, 0);
    }
  }
 
  drawSprites();
}