//Creating all variables and balloons
var playground,playgroundImg;
var blue_balloon,blue_balloonImg;
var red_balloon,red_balloonImg;
var pink_balloon,pink_balloonImg;
var green_balloon,green_balloonImg;
var bow,bowImg;
//Creating the score
var score=0;
//Choosing the balloon
var balloon_choice;
//Creating the groups
var redballoongroup,blueballoongroup,pinkballoongroup,greenballoongroup;
//Creating the arrow and arrow groups
var arrow,arrowImg,arrowGroup;
function preload(){
  //Loading images
  playgroundImg=loadImage("background0.png");
  blue_balloonImg=loadImage("blue_balloon0.png");
  red_balloonImg=loadImage("red_balloon0.png");
  pink_balloonImg=loadImage("pink_balloon0.png");
  green_balloonImg=loadImage("green_balloon0.png");
  bowImg=loadImage("bow0.png");
  arrowImg=loadImage("arrow0.png")
} 
function setup() {
  //Creating the playground
  createCanvas(600,600);
  playground=createSprite(0,100,600,600);
  playground.addImage("playground",playgroundImg);
  playground.scale=2.5;
  playground.velocityX=-2;
  //console.log(playground.width);
  //Creating the bow
  bow=createSprite(575,200);
  bow.addImage(bowImg);
  //Creating the groups
  redBalloonGroup=new Group();
  blueBalloonGroup=new Group();
  greenBalloonGroup=new Group();
  pinkBalloonGroup=new Group();
  arrowGroup=new Group();
}

function draw() {
  background(0);
  //Moving the playground
  if(playground.x<100){
  playground.x=playground.width/2;
  }
  //Moving the bow using the mouse
  bow.y=World.mouseY;
  var balloon_choice=Math.round(random(1,4));
  //Displaying the balloons
  if(World.frameCount%100==0){
    if(balloon_choice==1)
      {
      spawn_red_balloon();
      }
    else if(balloon_choice==2)
      {
      spawn_pink_balloon();
      }
    else if(balloon_choice==3)
      {
      spawn_blue_balloon();
      }
    else if(balloon_choice==4)
      {
      spawn_green_balloon();
      }
  }
  //Releasing the arrow
  if(keyWentDown("SPACE"))
  {
    arrowRelease(); 
  }
  //Popping the red balloons
  if(arrowGroup.isTouching(redBalloonGroup)){  
    redBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    //playSound("https://freesound.org/data/previews/411/411642_5121236-lq.mp3",false);
    score++;
  }
  //Popping the pink balloons
  if(arrowGroup.isTouching(pinkBalloonGroup)){
    pinkBalloonGroup.destroyEach();
    arrowGroup.destroyEach(); 
    //playSound("https://freesound.org/data/previews/411/411642_5121236-lq.mp3");
    score++;
  }
  //Popping the blue balloons
  if(arrowGroup.isTouching(blueBalloonGroup)){
    blueBalloonGroup.destroyEach();
    arrowGroup.destroyEach(); 
    //playSound("https://freesound.org/data/previews/411/411642_5121236-lq.mp3");
    score++;
  }
  //Popping the green balloons
  if(arrowGroup.isTouching(greenBalloonGroup)){
    greenBalloonGroup.destroyEach();
    arrowGroup.destroyEach(); 
    //playSound("https://freesound.org/data/previews/411/411642_5121236-lq.mp3");
    score++;
  }
  drawSprites();
  textSize(20);
  text("Score:"+score,270,40)
}
//Function to spawn the red balloon
function spawn_red_balloon(){
  red_balloon=createSprite(0,Math.round(random(40,370)),10,10)
  red_balloon.addImage(red_balloonImg);
  red_balloon.velocityX=3;
  red_balloon.lifetime=150;
  red_balloon.scale=0.1;
  redBalloonGroup.add(red_balloon);
  }
//Function to spawn the pink balloon
function spawn_pink_balloon(){
pink_balloon=createSprite(0,Math.round(random(40,370)),10,10)
  pink_balloon.addImage(pink_balloonImg);
  pink_balloon.velocityX=3;
  pink_balloon.lifetime=150;
  pinkBalloonGroup.add(pink_balloon);
}
//Function to spawn the blue balloon
function spawn_blue_balloon(){
blue_balloon=createSprite(0,Math.round(random(40,370)),10,10)
  blue_balloon.addImage(blue_balloonImg);
  blue_balloon.velocityX=3;
  blue_balloon.lifetime=150;
  blue_balloon.scale=0.1;
  blueBalloonGroup.add(blue_balloon);
}
//Function to spawn the green balloon
function spawn_green_balloon(){
green_balloon=createSprite(0,Math.round(random(40,370)),10,10)
  green_balloon.addImage(green_balloonImg);
  green_balloon.velocityX=3;
  green_balloon.lifetime=150; 
  green_balloon.scale=0.1;
  greenBalloonGroup.add(green_balloon);
}
//Function to release the arrow when the user presses the space bar
function arrowRelease(){
  arrow=createSprite(550,200);
  arrow.y=bow.y;
  arrow.addImage(arrowImg);
  arrow.scale=0.5;
  arrow.velocityX=-4;
  arrowGroup.add(arrow);
  arrow.setCollider("rectangle",10,-5,270,50)
  //arrow.debug=true;
}

