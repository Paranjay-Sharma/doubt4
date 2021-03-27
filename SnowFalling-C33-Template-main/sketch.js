const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var maxSnow = 100;

var body,boyImg;
function setup() {
boyImg =loadImage("boy.jpeg");

  createCanvas(800,400);
  for(var i = 0; i < maxSnow; i++){
    snow.push(new createSnow(random(0,500), random(0,500)));
 }
}
function draw() {
  background("snow2.jpg");

  Engine.update(engine);
  boy=createSprite(200,200,20,20);
  boy.addImage(boyImg);
  if(keyDown(RIGHT_ARROW)){
boy.x=boy.x+3;
  }  
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-3;
      }  
  for(var i = 0; i < maxSnow; i++){
    snow[i].display();
    snow[i].update();
}


  drawSprites();
}