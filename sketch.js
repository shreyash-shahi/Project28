var ground,dustbin1,paper,invisibleWall,invisibleWall1,slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 dustbin1 = new Dustbin(690,420,160,60);
	 ground = new Ground(400,580,800,20);
	 paper = new Paper(200,300,35);
	 slingshot = new SlingShot(paper.body,{x:100, y:400});

	 
	 var options ={
		 isStatic:true
	 }
	 invisibleWall = Bodies.rectangle(690,490,160,10,options);
	 World.add(world,invisibleWall);
     
	 invisibleWall1 = Bodies.rectangle(780,370,10,100,options);
	 World.add(world,invisibleWall1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);	
  background("yellow");
  Engine.update(engine);

 
  paper.display();
  dustbin1.display();
  ground.display();
  slingshot.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}