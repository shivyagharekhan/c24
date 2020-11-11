
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,695,800,10)
  paper = new Paper(300,300,20,5)
	dustbinc = new Dustbin(700,685,150,25)
  dustbinl = new Dustbin(625,685,25,150)
  dustbinr = new Dustbin(775,685,25,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbinc.display();
  dustbinl.display();
  dustbinr.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});

}

}


