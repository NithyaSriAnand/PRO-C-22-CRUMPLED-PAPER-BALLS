
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,leftSide,rightSide,bottom,ground;
var engine,world;

function setup() 
{
	createCanvas(800,700);
    engine = Engine.create()
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}


	//Create the Bodies Here.
	ground = new Ground(400,600,800,20);
	leftSide = new Ground(500,620,20,100);
	rightSide = new Ground(670,620,20,100);
	bottom = new Ground(610,660,100,20);

    ball = Bodies.circle(100,200,20,ball_options);
	World.add(world.ball);
   		
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y,20);
  ground.display();
  leftSide.display();
  bottom.display();
  rightsSide.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-15})
	}
}



