var movingrect,fixedrect

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(100,200,50,50)

  fixedrect.debug=true
  movingrect.debug=true
}

function draw() {
  background(255,255,255);  
 console.log(fixedrect.width/2+movingrect.width/2)
 console.log(fixedrect.x-movingrect.x)
 movingrect.x=World.mouseX
 movingrect.y=World.mouseY
 if(isTouching(movingrect,fixedrect)){
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}
else{
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
}
drawSprites();
}
