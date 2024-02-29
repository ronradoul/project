let x = 0;
let value = false;
let motorcycleImage;
let motorcycleSound;

function preload() {
  motorcycleImage = loadImage('motorcycle.png');
  motorcycleSound = loadSound('motorcycleSound.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  if (value==true){
    background('green');
  } else {
    background('red');
  }

  fill('white');
  textSize(30);
  textFont('Courier New');
  textStyle(BOLD);
  text('Press Right Arrow\n to move & Down\n Arrow to stop', 30, 70);

  image(motorcycleImage, x, 300, 200, 100);
  if (value === true && motorcycleSound.isLoaded()) {
    if (!motorcycleSound.isPlaying()) {
      motorcycleSound.play();
    }
    x = x + 0.5;
  } else {
    motorcycleSound.stop();
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    value = true;
  } else if (keyCode === DOWN_ARROW) {
    value = false;
  }
}