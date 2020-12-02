var form,game;
var START=0;
var PLAY=1;
var END=2;  
var mouse;
function setup(){
  createCanvas(displayWidth,displayHeight);    
  game = new Game();
  game.start();
   
}

function draw(){
      if(game.gameState===1){        
         game.play();
      }
}



