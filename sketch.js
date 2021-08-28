const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con,con2;
var ball2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,320,20,ball_options);
  World.add(world,ball2);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          length:130,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  con2 = Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:130,
    stiffness:0.1
  });
  World.add(world,con2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,20);
  fill("green")
  ellipse(ball2.position.x,ball2.position.y,20);

  push();
  strokeWeight(4);
  stroke("red");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  stroke("aqua");
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);

  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
    if(keyCode==LEFT_ARROW){
      Matter.Body.applyForce(ball2,{x:0,y:0},{x:-0.05,y:0});
    }
}