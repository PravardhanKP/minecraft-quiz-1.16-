var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("minecraft.jpg");
  bg2 = loadImage("monstor.jpg")
}

function setup() {
  createCanvas(1500,1000);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg2);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 400, 50);

  if(score === 4) {
    clear();
    background(bg)
    fill("YELLOW");
    textSize(40);
    text("Game Compleated",250, 200);
  }

  drawSprites()
}