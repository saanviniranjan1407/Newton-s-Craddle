const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var constraint1, constraint2, constraint3, constraint4, constraint5;

function setup() {
  createCanvas(800,650);

  engine = Engine.create();
  world = engine.world; 

  bobObject1 = new Bob(400,550,80);
  bobObject2 = new Bob(320,550,80);
  bobObject3 = new Bob(240,550,80);
  bobObject4 = new Bob(480,550,80);
  bobObject5 = new Bob(560,550,80);

  roof = new Roof(400,100,500,30);

  constraint1 = new Rope(bobObject1.body, {x:400, y:115});
  constraint2 = new Rope(bobObject2.body, {x:320, y:115});
  constraint3 = new Rope(bobObject3.body, {x:240, y:115});
  constraint4 = new Rope(bobObject4.body, {x:480, y:115});
  constraint5 = new Rope(bobObject5.body, {x:560, y:115});

  Engine.run(engine); 
}

function draw() {
  background(200);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

  keyPressed();
}

function keyPressed(){
  if(keyCode === 36){
    Body.applyForce(bobObject3.body,bobObject3.body.position, {x:85, y:-85})
  }
}