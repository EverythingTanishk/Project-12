var garden,rabbit;
var gardenImg,rabbitImg;
var leaf;
var apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  var select_sprites = Math.round(random(1,2));
 
 if(frameCount % 80 == 0){
   if(select_sprites == 1){
     createApples();
   }
   else{
     createLeaves();
   }
 }
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}
function createApples(){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 4;
    apple.lifetime = 300;
    apple.scale=0.1;
}
function createLeaves(){
  leaf = createSprite(random(60,350),30,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 2;
  leaf.lifetime = 300;
  leaf.scale=0.1;
}