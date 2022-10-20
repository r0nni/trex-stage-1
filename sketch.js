
var trex ,trex_running;
var ground ,ground_image;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(200,150,50,50)
trex.addAnimation("running",trex_running)
trex.scale=0.6

ground=createSprite(300,190,600,20)
ground.addImage(ground_image)
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.collide(ground)
  

  trex.velocityY=trex.velocityY+0.5
  ground.velocityX=-2
  if(ground.x<0){
ground.x=300
  }
drawSprites ()
}
