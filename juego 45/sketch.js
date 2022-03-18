var canvas;
var backgroundImage, bgImg, play1_img, play2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, play1, play2;
var plays = [];

function preload() {
  backgroundImage = loadImage("./assets/baall.jpg");
 play1_img= loadImage("../assets/play1.png");
  play2_img= loadImage("../assets/play2.jpg");
  track = loadImage("../assets/track2.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
