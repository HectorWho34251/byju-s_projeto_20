const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var obj1, obj2, obj3;

function preload() {
  
}

function setup() {
 createCanvas(550, 600);
 
 engine = Engine.create();
 world = engine.world;

 //Crie os Corpos Aqui.
 var plane_options = {
    isStatic : true
 }

  var obj1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0.1
  }
    var obj2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1
  }
    var obj3_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir: 0.3
  }

  plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
  World.add(world, plane);

  obj1 = Bodies.circle(220, 10, 10, obj1_options);
  World.add(world, obj1);

  obj2 = Bodies.rectangle(110, 50, 10, 10, obj2_options);
  World.add(world, obj2);

  obj3 = Bodies.rectangle(350, 50, 10, 10, obj3_options);
  World.add(world, obj3);

 //estilizando os corpos
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() {
 rectMode(CENTER);

 background("lightblue");

 rect(plane.position.x, plane.position.y, 1200, 2);

 ellipse(obj1.position.x, obj1.position.y, 30);
 rect(obj2.position.x, obj2.position.y, 50, 50);
 rect(obj3.position.x, obj3.position.y, 100, 50);

 Engine.update(engine);

 drawSprites();
 
}



