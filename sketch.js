
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cookie, cookieImg
var score = 0
let clickPower = 1;

function preload()
{
	cookieImg = loadImage("goodcookie.png")
}

function setup() {
	background(255, 255, 255);
	background("Gray");

	cookie = createSprite(200,200, 100, 100)
	cookie.addImage(cookieImg)
	cookie.scale = 0.2

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200)

  textSize(24);
  textAlign(CENTER);
  text(`Cookies: ${score}`, width / 2, 30);
  text("press P, While Mouse is hovering over the Cookie", 255,80);
  text(`Click Power: ${clickPower}`, width / 2, 60);
  


  
  drawSprites();
 
}



  function keyPressed() {
	// Pressing 'P' key increases click power
	if (key === 'p' || key === 'P') {
	  clickPower++;
	}

	if (cookie.overlapPoint(mouseX, mouseY)) {
		// If the mouse is clicked on the sprite, change its color to green
		cookie.scale +=0.005
		if (score % 5 === 0 && score !== 0) {
			milestoneEvent();
		  }


	
		// You can add more actions or events here as needed
	  }

function milestoneEvent(){
	let milestone = score / 25;
	score ++
}
	  


  }
