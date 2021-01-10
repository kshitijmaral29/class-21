var movingrect,fixedrect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(800,400);
 movingrect= createSprite(700, 200, 100, 50);
 movingrect.shapeColor = "blue";
 movingrect.debug = true;
movingrect.velocityX = -5;

 o1 = createSprite(100,100,50,50);
 o1.shapeColor = "blue";

 o2 = createSprite(200,100,50,50);
 o2.shapeColor = "blue";

 o3 = createSprite(300,100,50,50);
 o3.shapeColor = "blue";

 o4 = createSprite(400,100,50,50);
 o4.shapeColor = "blue";
 

 fixedrect = createSprite(300,200,70,100);
 fixedrect.shapeColor = "blue";
 fixedrect.debug = true;
 fixedrect.velocityX = 5;
}

function draw() {
  background(0);  

  //movingrect.x = World.mouseX;
 // movingrect.y = World.mouseY;

  if(isTouching(movingrect,o1,o2))
  {
  movingrect.shapeColor = "red";
  o1.shapeColor ="red"; 
  o2.shapeColor = "red";
  }

  else{
    movingrect.shapeColor = "green";
  o1.shapeColor ="green";


  }

  bounceOff(movingrect,fixedrect)
  drawSprites();
}

