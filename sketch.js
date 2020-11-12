
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var paper;
var box1,box2,box3


function preload()
{
	
}

function setup() {
  createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper = createSprite(200,380,25,25)
	box1  = createSprite(1000,385,100,10);
	box2  = createSprite(950,330,10,100);
	box3  = createSprite(1050,335,10,100);
	


	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  drawSprites();
}



