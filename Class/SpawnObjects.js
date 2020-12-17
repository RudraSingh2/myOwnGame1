class SpawnObjects{
    constructor(){
        
    }

    spawnGoodFood(){
        if(World.frameCount%40===0){
            var food = createSprite(displayWidth, random(50,displayHeight-50),30,30);
            food.velocityX = -4;
            var rand = Math.round(random(1,3));
            switch(rand){
                case 1: food.addImage(goodFood1);
                    break;
                case 2: food.addImage(goodFood2);
                    break;
                case 3: food.addImage(goodFood3);
                    break;
                default: break;
            }
            food.scale = 0.1;
           
            food.lifetime = 2000;
           // goodFoodGroup.add(food);
            food.setCollider("rectangle",0,0,20,20);
            goodFoodGroup.add(food);
          }
        
    
        }
        spawnBadFood(){
            if(World.frameCount%40===0){
                var food1 = createSprite(displayWidth, random(50,displayHeight-50),30,30);
                food1.addAnimation("fish1",fishImg);
                food1.addAnimation("fish2",fish2Img);
                food1.velocityX = -4;
                var rand = Math.round(random(1,2));
                switch(rand){
                    case 1: food1.changeAnimation("fish1",fishImg);
                        break;
                    case 2: food1.changeAnimation("fish2",fish2Img);
                        break;
                    default: break;
                }
                food1.scale = 0.1;
               
                food1.lifetime = 2000;
               // goodFoodGroup.add(food);
                food1.setCollider("rectangle",0,0,20,20);
                badFoodGroup.add(food1);
              }
            
        
            }
           
    }
  
   

    
