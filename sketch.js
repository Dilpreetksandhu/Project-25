
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	dust=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
 
	 ground = Bodies.rectangle(400, 650, 800, 10, {isStatic: true});
	World.add(world, ground);
	fill(255, 0, 0)
	rect1 = Bodies.rectangle(490, 610, 20, 80, { isStatic: true });
	World.add(world, rect1)
	//    rect1.fill(255,0,0)

	rect2 = Bodies.rectangle(600, 635, 200, 20, { isStatic: true });
	World.add(world, rect2)
	//    rect2.fill(255,0,0)

	rect3 = Bodies.rectangle(700, 610, 20, 80, { isStatic: true });
	World.add(world, rect3)
//    rect3.fill(255,0,0)
	paperObject = new Paper(100, 600)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(198);

  
	fill(255, 255, 255)
	rect(rect1.position.x,rect1.position.y,20,80)
	rect(rect2.position.x, rect2.position.y, 200, 20)
	rect(rect3.position.x, rect3.position.y, 20, 80)
	fill(0,255,0)
	rect(ground.position.x, ground.position.y, 800, 10);
	paperObject.display()
	image(dust,470,450,250,200)
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-55})
}

}

