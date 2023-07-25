
var trex ,trex_runner;
var ground, groundImage;
function preload(){
  trex_runner=loadAnimation( "trex1.png" ,"trex3.png", "trex4.png" );
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(100,150,50,50)
  trex.addAnimation("trex_runner",trex_runner)
  trex.scale=0.5
  trex.x=50

  ground = createSprite(300, 180, 600, 20)
  ground.addImage(groundImage)
}

function draw(){
  background("white");
  if(keyDown("space")){
   trex.velocityY=-10
  }

  trex.velocityY=trex.velocityY+0.8
trex.collide(ground)


drawSprites();
}
