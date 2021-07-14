var garden, rabbit, apple, leaf;
var gardenImg, rabbitImg, appleImg, leafImg;
var choose;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = createGroup();

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;

  if(appleGroup.isTouching(rabbit)){
    apple.destroy();
  }

  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.depth = 3;

  choose = Math.round(random(1,2));


  if(frameCount % 80 == 0){
    if(choose == 1){
      createApple();
    }
    else{
      createLeaf();
    }
  }

  drawSprites();
}


function createApple() {
  apple = createSprite(random(50, 350,), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 4;
  apple.lifetime = 200;
  apple.depth = 2;
  appleGroup.add(apple);
}


function createLeaf() {
  leaf = createSprite(random(50, 350,), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 4;
  leaf.lifetime = 200;
  leaf.depth = 1;
  
}