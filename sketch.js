const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
   const Constraint = Matter.Constraint;
    var Sn = [];


var bg
var Santa
var ground
var engine,world

function preload(){
bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(1200,900);
  engine = Engine.create();
   world = engine.world;
  Santa = new santa(400,600,150,150)
 ground = new Ground(600,890,1200,20)
 

}

function draw() {
  background(bg);  
  Engine.update(engine)
  Santa.display();
  ground.display();


  if (frameCount%50===0){
    Sn.push(new snow(random(100,width),50,50))
  }
   for (var j=0;j<Sn.length;j++){
     Sn[j].display();
   }
}