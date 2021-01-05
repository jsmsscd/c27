
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var B1,B2,B3,B4,B5;
var R;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
///dia=100
//wid=800
rad=40
	//Create the Bodies Here.
	R=new Roof(width/3,height/7,width/3,20)
    B1=new Bob(R.width/2,height/4,rad)
//	B2=new Bob(700,150,50);
//	B3=new Bob(800,200,50);
//	B4=new Bob(800,200,50);
//	B5=new Bob(800,200,50);
console.log(R.x)
	Engine.run(engine);
  
}


function draw() {
  background("black");
  R.display();
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  drawSprites();
 
}



