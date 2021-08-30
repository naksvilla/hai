const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(1200,600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
 playerbase = new PlayerBase(150, 500, 160, 310);
 computerbase = new PlayerBase(1000, 500, 160, 310);
 player = new PlayerMan(1000, 250, 160, 310);
 computer = new PlayerMan(150,250,160,310)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display();
   computerbase.display();

   //display Player and computerplayer
player.display()
computer.display()

}
