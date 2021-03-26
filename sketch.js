
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,rock,mango2,mango3,mango4,mango5;
var world,boy,grip;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1030,100,30);
	mango4=new mango(970,200,30);
	mango5=new mango(1180,200,30);

	rock=new stone(235,415,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	grip=new hand(rock.body,{x:235, y:415});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  textSize(35)
  text("Press Space to get a second chance to play!",50,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  grip.display();
  rock.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();

  detectcollision(rock,mango1);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);

  
}

function mouseDragged(){
Matter.Body.setPosition(rock.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  grip.throw();
}

function detectcollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);	
}

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(rock.body,{x:235, y:415});
		
		grip.attach(rock.body);
	}
}


