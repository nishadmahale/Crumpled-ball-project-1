
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin1,Dustbin2,Dustbin3,ground,paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin1=new Dustbin(532,670,180,40);
	Dustbin2=new Dustbin(430,670,30,230);
	Dustbin3=new Dustbin(598,670,30,230);
	paper=new Paper(40,600,30);
	ground = new Ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  














  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  paper.display();
  ground.display();

	

  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-90})
	}




}




