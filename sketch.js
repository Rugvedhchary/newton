
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var constraintbob;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,190,70);
  bob2 = new Bob(220,210,70);
	bob3 = new Bob(100,310,70);
  bob4 = new Bob(270,290,70);
	bob5 = new Bob(190,210,70);

	roof = new Roof(400,80,430,50);

  rope1 = new Rope(bobObject.body1,roofObject.body,-bobDiameter*2, 0)

 var options = {
   bodyA: bob.body,
   bodyB: constrainedbob.body,
   stiffness: 0.04,
   length: 10
 }

 var rope = constraint.create(options)
 World.add(world.rope);


	
Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  constrainedbob.display();

  strokeWeight(3);
  line(bob.body.position.x,bob.body.position.y,constrainedbob.body.position.x,constrainedbob.body.position.y)



  
  
  



  drawSprites();
 
}



