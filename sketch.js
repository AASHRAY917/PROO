var boy,boyImg;
var path,pathImg;
var coin,coinImg;
var gameState = "play";




function preload()
{
  boyImg.loadImage("Boy.jpg");
  pathImg.loadImage("path.jpg");
  coinImg.loadImage("download.jpg");
}

function setup() 
{
 createCanvas(600,600);

 path = createSprite(300,300);
 path.addImage("pathImg");
 path.velocityX = 1;


}

function draw() 
{
  drawSprites();
  spawnCoins();
}

function spawnCoins ()
{
  if(frameCount % 240 === 0)
  {
    coin = createSprite (200,-50);
    coin.addImage("coinImg");
    coin.x = Math.round(random(120,400));
  }
}