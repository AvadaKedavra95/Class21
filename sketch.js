var fixedRect, movingRect;
var o1,o2,o3,o4,o5

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(300,230,60,10);
  o2=createSprite(1000,230,10,60);
  o3=createSprite(200,330,50,20);
  o4=createSprite(330,200,20,50);
  o5=createSprite(600,400,10,120);
  o1.velocityX=4;
  o2.velocityX=-4;
  o1.shapeColor="red";
  o2.shapeColor="green";
  o3.shapeColor="blue";
  o4.shapeColor="pink";
  o5.shapeColor="orange";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  o1.y = World.mouseY;
  o1.x= mouseX

  if(isTouching(o1,movingRect)){
    o1.shapeColor = "white";
    o2.shapeColor = "white";
  }
  else {
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }
  bounceOff(o1,o2);
  drawSprites();
}



