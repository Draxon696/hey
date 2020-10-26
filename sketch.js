const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var box1, box2;
var engine, world, ground,ball;
function setup() {
  createCanvas(400,400);
 engine= Engine.create();
 world= engine.world;
 box1 = new Box(200,100,50,50);
 box2 = new Box(240,300,50,50);
 ground = new Ground(width/2,370,400,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}