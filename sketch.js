var form,game, spawnFood;
var START=0;
var PLAY=1;
var END=2;  
var bg;
var mouse;
var badFoodGroup,goodFoodGroup,medal;
var restart;
var mouseImg, bgImg;
var goodFood1, goodFood2, goodFood3;
var fishImg,fish2Img;
var medalIMG,restartIMG;
var medal,retstart;
var score=0;
var time = 0;
var timer = 15;
function preload(){
   mouseImg = loadImage("Pictures/mousee.png");
   bgImg = loadImage("Pictures/background1.jpg");
   goodFood1 = loadImage("Pictures/apple2.png");
   goodFood2 = loadImage("Pictures/orange.png");
   goodFood3 = loadImage("Pictures/bananana.png");
  fishImg = loadAnimation("Pictures/fshii.png");
  medalIMG = loadImage("Pictures/gold.png");
  restartIMG = loadImage("Pictures/re.jpg")
  fish2Img = loadAnimation("Pictures/fish.gif");
}
function setup(){
  createCanvas(displayWidth,displayHeight);   
  goodFoodGroup = new Group(); 
  badFoodGroup = new Group();
  game = new Game();
  game.start();
}


function draw(){  
       if(game.gameState === 1){
        game.play();
        
       }     
         
           
}



