
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
	Dustbin1=new Dustbin(532,690,150,40);
	Dustbin2=new Dustbin(444,690,30,250);
	Dustbin3=new Dustbin(598,690,30,250);
	paper=new Paper(40,600,30);
	ground=createSprite(790,690,12300,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  














  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  paper.display();

	

  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85})
	}




}




