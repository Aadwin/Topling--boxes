const Engine= Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var canvas;

var ourEngine,ourWorld;
var ground;
var box1,box2;


function setup() {
   canvas=createCanvas(400,400);

   ourEngine=Engine.create();
   ourWorld = ourEngine.world;

    box1 = new Box(240,100,50,100);
    box2 = new Box(200,300,50,50);

    console.log(box1);

     ground = new Ground(200,390,400,20);
    console.log(ground);
   
   

  
}

function draw() {

  background(0);  

  Engine.update(ourEngine);
  box1.display();
  box2.display();
  
  ground.display();
  

  
}