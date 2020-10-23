 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ground,ball,dustbinImg,dustbin2;
function preload()
{
dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
  dustbin2=createSprite(1200,540,300,100);
  dustbin2.addImage(dustbinImg);
  dustbin2.scale=0.8;

	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(700,665,1900,10);
  bin=new dustbin (1200,650,200,10);
 
  ball=new PaperBall(200,450,70);
  
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  bin.display();
  ball.display();
  ground.display();
  keyPressed(); 
 


  drawSprites();
 
}

function keyPressed() {
  if (keyDown("UP_ARROW")) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:21,y:-25});
  }
  }
  

