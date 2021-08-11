var gamestate = 0;
var playercount = 0;
var canvas, database;
var form, player, game;

function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);

  game = new Game()
  game.getstate()
  game.start()
  
}

function draw(){
  background("white");
  
    drawSprites();
  
}
