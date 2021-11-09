
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var hammer
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(700,320);
    ground= new Ground(400,690,800,20);
	stone= new Stone(400,400,60,60);
	rubber= new Rubber(500,400,10);
	rubber1= new Rubber(510,400,10);
	rubber2= new Rubber(515,400,10);
	rubber3= new Rubber(520,400,10);
	rubber4= new Rubber(530,400,10);
	rubber5=new Rubber(700,600,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
 rubber1.display();
 rubber2.display();
 rubber3.display();
 rubber4.display();
 rubber5.display();
 
  drawSprites();
 
}



