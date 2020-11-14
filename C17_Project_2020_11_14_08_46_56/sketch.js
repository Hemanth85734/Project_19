var ball,ballimg;
var paddle, paddleimg;
var score;
function preload() {
  
  //ball
  ballimg=loadImage("ball.png");
  //paddle
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   
  //sprites
  ball = createSprite(200,200,20,20);
  paddle= createSprite(380,200,20,80);

  //images
  ball.addImage("ball.png", ballimg);
  paddle.addImage("paddle.png", paddleimg);
  
  //initial velocity
  ball.velocity.x=9; 


}

function draw() {
  background(205,153,0);
  
  //bounceOff
  //edges
  edges=createEdgeSprites();
  //left
  ball.bounceOff(edges[0]);
  //right
  //ball.bounceOff(edges[1]);
  //top
  ball.bounceOff(edges[2]);
  //bottom
  ball.bounceOff(edges[3]);
  
  //bounceOff
  ball.bounceOff(paddle);
  
  //edges
  edges=createEdgeSprites();
  //left
  paddle.bounceOff(edges[0]);
  //right
  paddle.bounceOff(edges[1]);
  //top
  paddle.bounceOff(edges[2]);
  //bottom
  paddle.bounceOff(edges[3]);
  
  //paddle
  //paddle.y=mouseY; 
  
  
  
 
   
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(ball.isTouching(paddle)){
    randomVelocityY();  
  }
  drawSprites();
  
}

function randomVelocityY()
{
  ball.velocityY=random(-20,20);
}

