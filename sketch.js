
var monkey , monkey_running;
var bananaGroup,banana ,bananaImage ;
var obstacleGroup,obstacle, obstacleImage;
var score = 0;
var backGround,backGroundImg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backGroundImg = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(500,400);
  
  
  backGround = createSprite(150,150,10,10);
  backGround.addImage(backGroundImg);
  backGround.velocityX=-4;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.visible = false;
  
  
  
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw(){
  
  ground.x=ground.width/2;
  backGround.x=backGround.width/2;
  
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  
  switch(score){
    case 10:monkey.scale=0.12;
            break;
    case 20:monkey.scale=0.14;
            break;
    case 30:monkey.scale=0.16;
            break;
    case 40:monkey.scale=0.18;
            break;
    default:break;        
  }
  
  bananaG();
  obstacles();
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score + 2;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.08;
  }
  
  drawSprites();
  fill('white');
  text("Score:"+ score,50,100);
}

function bananaG(){
  if(World.frameCount%100===0){
    banana = createSprite(600,315,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.velocityX = -4;
    banana.lifetime = 150;
    banana.debug = false;
    bananaGroup.add(banana); 
  }
}

function obstacles(){
  if(World.frameCount%120===0){
    obstacle = createSprite(600,310,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacle.scale =0.2;
    obstacleGroup.add(obstacle);
  }
}
    
  
    






