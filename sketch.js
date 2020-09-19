var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,50,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(400,50,50,30);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj2 = createSprite(500,200,50,30);
  obj2.shapeColor = "green";
  obj2.debug = true;
   
  obj3 = createSprite(600,60,50,30);
  obj3.shapeColor = "green";
  obj3.debug = true;
  
  obj4 = createSprite(700,90,50,30);
  obj4.shapeColor = "green";
  obj4.debug = true;
  
  movingRect.velocityY=-10;
  obj1.velocityY=10;
  
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,obj1);
  


  drawSprites();
}


