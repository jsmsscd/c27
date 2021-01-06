
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
	R=new Roof(600,200,200,20)
    B1=new Bob(605,370,rad)
  	B2=new Bob(510,370,rad);
  	B3=new Bob(555,370,rad);
  	B4=new Bob(655,370,rad);
    B5=new Bob(700,370,rad);
console.log(R.x)
	Engine.run(engine);
  
}


function draw() {
  background("red");
  R.display();
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  drawSprites();
 
}



