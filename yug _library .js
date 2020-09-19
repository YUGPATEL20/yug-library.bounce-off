function  bounceoff(gameobject1,gameobject2){

    //gameobject1.velocityY=-5;
    //gameobject2.velocity=5;
    
      if (gameobject1.x - gameobject2.x < gameobject2.width/2 +gameobject1.width/2
        &&gameobject2.x -gameobject1 .x <gameobject2 .width/2 + gameobject1.width/2) {
          gameobject1. velocityX = gameobject1.velocityX * (-1);
          gameobject2.velocityX =gameobject2 .velocityX * (-1);
    
          gameobject1.shapeColor="blue";
          gameobject2.shapeColor="blue";
    
          
    }
    if (gameobject1.y -gameobject2 .y < gameobject2.height/2 + gameobject1.height/2
      &&gameobject2.y - gameobject1.y < gameobject2.height/2 + gameobject1.height/2){
        gameobject1 .velocityY = gameobject1.velocityY * (-1);
        gameobject2.velocityY =gameobject2.velocityY * (-1);
    }
    
    
    
    }
      
    