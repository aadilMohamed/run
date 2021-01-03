var you;
var gamestate = 0
 function setup(){
    canvas = createCanvas(400,displayHeight-150);
      you = createSprite(200,500,50,50); 
      createSprite(100,displayHeight/2,10,displayHeight)
      createSprite(300,displayHeight/2,10,displayHeight)
    } 
    function obstacles(){
        var obstacle
        if(frameCount%30 === 0){
            obstacle = createSprite(random(0,400),0,30,30)
            obstacle.velocityY = random(8,15)
            obstacle.shapeColor = color("red")
                
        }
        if (you.width+obstacle.width<40){
            gamestate = 1
        }
        if (you.height+obstacle.height<40){
            gamestate = 1
        }
        }
        
function draw(){
    if (gamestate === 0){ 
    background("black"); 

if(keyWentDown(RIGHT_ARROW)&&you.x === 200){
    camera.position.x = camera.position.x+200 
    you.x = you.x+200
}
if(keyWentDown(RIGHT_ARROW)&&you.x === 0){
    camera.position.x = camera.position.x+200 
    you.x = you.x+200
}
if(keyWentDown(LEFT_ARROW)&&you.x === 200){
    camera.position.x = camera.position.x-200 
    you.x = you.x-200
}
if(keyWentDown(LEFT_ARROW)&&you.x === 400){
    camera.position.x = camera.position.x-200 
    you.x = you.x-200
}
obstacles() 
drawSprites() 


}
if (gamestate === 1){
    text("Game")
    text("Over")
    text("¯\_(ツ)_/¯")

}
}


