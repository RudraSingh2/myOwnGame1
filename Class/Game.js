class Game{
    constructor(){
        this.gameState = 0;
        this.gameLevel = "level1"
    }
    start(){

        if(this.gameState === 0){
           form = new Form();
           form.display();           
        }
        mouse = createSprite(200,200); 
        mouse.scale = 0.1;   
         mouse.addAnimation("Mouse-Running",mouseImg);
        //badFood = createSprite(200,120);
        //goodFood = createSprite(400,200);  
       // bg = createSprite(displayWidth/2,displayHeight/2);
        //bg.addImage(bgImg);
    }

    play(){
        console.log("Inside play function"); 
        background(bgImg);
        mouse.y = World.mouseY
        spawnFood = new SpawnObjects();
        spawnFood.spawnGoodFood();
        spawnFood.spawnBadFood();
        textSize(30);
        fill("white");
        text("SCORE: " + score, 20,30);        
        textSize(30);
        fill("white");
        text("TIME TAKEN:" + time, displayWidth-250,30);
        if(World.frameCount%30===0){
            time = time + 1;
        }
        //add score
        if(goodFoodGroup.isTouching(mouse)){           
            //goodFoodGroup.destroyEach();
            for(var i=0; i< goodFoodGroup.length;i++){
                if(mouse.isTouching(goodFoodGroup.get(i))){
                    goodFoodGroup.get(i).destroy();
                    score = score + 1;
                    console.log(score);
                }
            }
            //playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
        }
        if(mouse.isTouching(badFoodGroup)){
            this.gameLevel = "wait";
            score = score - 1;
            badFoodGroup.destroyEach();
            console.log("after destroy");
            //playSound("sound://category_alerts/vibrant_game_negative_bling_1.mp3");
        }
        console.log(this.gameState);
        //changes gameState to over
        if(score === -2){
            this.gameLevel = "over";
        }
        console.log(this.gameLevel);

        if(this.gameLevel == "level1"){
            this.level1();
        }else if(this.gameLevel === "level2"){
            this.level2();
        }else if(this.gameLevel === "final"){
            this.finalLevel();
        }else if(this.gameLevel === "wait"){
            this.wait();
        }else if(this.gameLevel === "won"){
            this.won();
        }else if(this.gameLevel === "over"){
            this.over();
        }
        
        drawSprites();
    }

    level1(){   
        
        text("LEVEL 1", displayWidth/2-20,30);
        console.log(score);
        //level up
        if(score === 3){
            this.gameLevel = "level2";
            //playSound("sound://category_female_voiceover/level_up_female.mp3");
        }
        
    }
    level2(){
        text("LEVEL 2", displayWidth/2-20,30);
        //changes velocity
        goodFoodGroup.setVelocityXEach(-9);
        badFoodGroup.setVelocityXEach(-9);
        //changes to final
        if(score === 6){
            this.gameLevel = "final";
           //playSound("sound://category_female_voiceover/level_up_female.mp3");
        }
    }
    finalLevel(){
        text("FINAL LEVEL", displayWidth/2-50,30);
        //changes velocity
        goodFoodGroup.setVelocityXEach(-12);
        badFoodGroup.setVelocityXEach(-12);
        //changes to won
        if(score === 10){
            this.gameLevel = "won";
            //playSound("sound://category_female_voiceover/shout_congratulations_female.mp3");
        }
    }
    
    won(){
        fill("white");
        textSize(40);
        text("You Win", displayWidth/2 -80, 200);
        textSize(30);
        text("More than 100 million", displayWidth/2 - 100,260);
        text("mice and rats are killed",displayWidth/2 - 100,300);
        text(" in US laboratories every",displayWidth/2 - 100, 340);
        text("year due to pesticides",displayWidth/2 - 100,380);
        medal = createSprite(200,200);
        medal.scale= 0.1
        medal.addImage(medalIMG);
  
        //restart.display();
        
    // restart.visible = true;
        //medal.visible = true; 
        
        goodFoodGroup.destroyEach();
        badFoodGroup.destroyEach();
        
    }
    wait(){
        goodFoodGroup.destroyEach();
        badFoodGroup.destroyEach();
        mouse.y = 40;
        // bg.velocityX = 5;
        //if(bg.x > 400){
          //bg.x = bg.width/2;
        //}
        
        textSize(30);
        fill("white");        
        text("OH NO! YOU ATE", displayWidth/2-100,150);
        text("BAD FOOD!", displayWidth/2-100,175);
        text("WAIT TIME: " + timer, displayWidth/2-100,200);
        
        if(World.frameCount%10===0){
          timer = timer - 1;
        }
        
        //timer changes to play
        if(timer === 0){
          this.gameLevel = "level1";
          timer = 15;
        }
    
    }
    over(){
        textSize(30);
        fill("white");
        text("YOU ATE TOO MUCH", displayWidth/2-100,70);
        text("BAD FOOD!", displayWidth/2-100,110);
        fill("green");
        text("GAME OVER", displayWidth/2-100,160);
        fill("blue");
        text("TOTAL TIME: " + time, displayWidth/2-100,250);
        text("FINAL SCORE:" + score, displayWidth/2-100,210);
        textSize(30);
        fill("red");
        text("PRESS THE MOUSE TO", displayWidth/2-100,290);
        text("RESTART", displayWidth/2-100,340);
        restart = createSprite(200,200);
        restart.scale = 0.2
        restart.addImage(restartIMG);
      
        //bg.velocityX = 0;
        
        goodFoodGroup.destroyEach();
        mouse.x = 200;
        mouse.y = 370;
        
        if(mousePressedOver(mouse)){
          reset();
        }
    }
}
