
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

	//Crie os Corpos Aqui.
	var block1_options = {
		restituition:0.5,
		friction:0.02,
		frictionAir: 0
	}

	var block2_options = {
		restituition:0.7,
		friction:0.01,
		frictionAir: 0.1
	}

	var block3_options = {
		restituition:0.01,
		friction:1,
		frictionAir: 0.3
	}

	var plane_options = {
		isStatic:true
	}

    block1 = Bodies.circle(220,10,10,block1_options)
	World.add(world, block1)

	block2 = Bodies.rectangle(110,50,10,10,block2_options)
	World.add(world, block2)

	block3 = Bodies.rectangle(350,50,10,10,block3_options)
	World.add(world, block3)

	ground = Bodies.rectangle(300,450,1000,30,plane_options)
	World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  createCanvas(600,450)
  rectMode(CENTER);
  background("green");
  
  /*block1.fill("red")
  block2.fill("red")
  block3.fill("red")/*/



  ellipse(block1.x,block1.y,10)
  rect(block2.x,block2.y,10,10)
  rect(block3.x,block3.y,10,10)

  drawSprites();
 
}



