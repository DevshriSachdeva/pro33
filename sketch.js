const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas,bg, ground;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

var Snow=[]
var Snow1=[]
var Snow2=[]
var Snow3=[]
var Snow4=[]

function preload() {
    bg = loadImage("images/snow1.jpg");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);
     engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    ground=new Ground(10,700,2000,20);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    Engine.update(engine);  

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

     
  if (frameCount%20===0){
    Snow.push(new snow(random(5,995),0,10))
  }
  if (frameCount%20==5){
    Snow1.push(new snow(random(5,995),0,10))
  }
 
  if (frameCount%20==10){
    Snow2.push(new snow(random(5,995),0,10))
  }
  if (frameCount%20==15){
    Snow3.push(new snow(random(5,995),0,10))
  }
  if (frameCount%20==20){
    Snow4.push(new snow(random(5,995),0,10))
  }

    drawSprites();

    for (var s=0;s<Snow.length;s++){
        Snow[s].display()
         }
    for (var s=0; s<Snow1.length;s++){
           Snow1[s].display();
         }
    for (var s=0; s<Snow2.length;s++){
          Snow2[s].display();
        }
    for (var s=0; s<Snow3.length;s++){
          Snow3[s].display();
        }
    for (var s=0; s<Snow4.length;s++){
          Snow4[s].display();
        }

        ground.display();

        drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}