var trex, trexRun, ground, invGround, groundPic, jump, speed, obs,ran,obsticale1,obsticale2,obsticale3, score, cactus,cloudpic,cloud1,gamestate;
function preload(){
  trexRun=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundPic=loadImage("ground2.png");
 
  
  obsticale1=loadImage("obstacle1.png");
  obsticale2=loadImage("obstacle2.png");
  obsticale3=loadImage("obstacle3.png");
  cloudpic= loadImage("cloud.png");
}

function setup() {
  createCanvas(400, 400);
  trex=createSprite(30,370);
  trex.addAnimation("run",trexRun);
  trex.scale=0.5;
  ground=createSprite(200,395,400,10);
  ground.addImage("gro", groundPic);
 ground.x=ground.width/2;
 invground=createSprite(30,397,30,10);
  invground.visible=false;
  score=0;
   jump=1;
  speed=-6;
  obs=new Group();
  clouds=new Group();
  gamestate="play";
}
function cac(){
  if(World.frameCount%60==0){
    cactus = createSprite(400,368,40,50);
    
    
    if (speed<-6){
      cactus.velocityX=speed;
    }else{
      cactus.velocityX=-6;
    }
    ran= Math.round(random(1,3));
    switch(ran){
        
        
      case 1:  cactus.addImage("obsticale1",obsticale1);
        break;
        
      
        
        default : cactus.addImage("obsticale2",obsticle2);
         break;
         case 2: cactus.addImage("obsticale2",obsticale2);
          break;
          case 3: cactus.addImage("obsticale3",obsticale3);
        
        
        
    }
    cactus.scale=0.7;
    cactus.lifetime=120;
    obs.add(cactus);
  }
}
function cloud(){
  if(frameCount%120==0){
    
    cloud1= createSprite(400,60);
    clouds.add(cloud1);
    if (speed<-4){
      cloud1.velocityX=speed;
    }else {
      cloud1.velocityX=-4;
    }
    cloud1.addImage("cloudpic",cloudpic);
  }
}

function draw() {
  background(0);
  if(gamestate=="play"){
     if (ground.x<0){
    ground.x=ground.width/2;
  }
  trex.velocityY+=0.5;
  if(keyDown("space")&&trex.y>=368){
    trex.velocityY=-8;
  }
  if(score>1200){
    speed=score/-200;
  }
  if (speed<-6){
      ground.velocityX=speed;
    }else{ 
      ground.velocityX=-6;
    }
  trex.collide(invground); 
  score+=1;
   text("score:"+score,340,25);
  console.log(trex.y);
  cac();
  cloud();
  }
  if(obs.isTouching(trex)){
     gamestate="end";
     }
  drawSprites();
}