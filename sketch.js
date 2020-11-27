const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint

var boyi, boy, stoni, stone;
var treei, tree, mangoi, mango;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = Bodies.rectangle(600, 600, 20, 20);
	World.add(world,boy);

	stoneObj = new Stone(215,422,70);

	ground = Bodies.rectangle(700, 800, 800, 20);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  boy.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
      boy.attach(stoneObj.body);
  }
}

function detectollision(Lstone,Lmango){
  mangoBodyPosition=lmoango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y)
  if(distance<=lmango.r+lstone.r) [
    Matter.Body.setStatic(lmango.body,false)
  ]
}
