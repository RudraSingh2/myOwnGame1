var form,game, spawnFood;
var START=0;
var PLAY=1;
var END=2;  
var bg;
var mouse;
var badFood,goodFood,medal;
var restart;
var mouseImg, bgImg;
var goodFood1, goodFood2, goodFood3;
var fishImg,fish2Img;
function preload(){
   mouseImg = loadAnimation("Pictures/Mouse-Running.gif");
   bgImg = loadImage("Pictures/background1.jpg");
   goodFood1 = loadImage("Pictures/apple2.png");
   goodFood2 = loadImage("Pictures/orange.png");
   goodFood3 = loadImage("Pictures/bananana.png");
  fishImg = loadImage("Pictures/fshii.png");
  fish2Img = loadAnimation("Pictures/fish.gif");
}
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



