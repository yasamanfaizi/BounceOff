function setup() {
  createCanvas(800,1000);
  Rect1 = createSprite(400, 200, 50, 50);
  Rect2 = createSprite(400, 800,80,30);
  Rect1.velocityY = 5;
  Rect2.velocityY = -5;
}

function draw() {
  background("blue"); 
  if(abs(Rect1.x-Rect2.x)<Rect1.width/2+Rect2.width/2){
    Rect1.velocityX = Rect1.velocityX * -1
    Rect2.velocityX = Rect2.velocityX * -1
  } 
  if(abs(Rect1.y-Rect2.y)<Rect1.height/2+Rect2.height/2){
    Rect1.velocityY = Rect1.velocityY * -1
    Rect2.velocityY = Rect2.velocityY * -1
  } 
  drawSprites();
}