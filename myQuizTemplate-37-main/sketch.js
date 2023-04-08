var canva;
var gameState=0;
var contestantCount; 
var database;
var quiz;
var question;
var contestant; 
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new quiz();
  quiz.start();
}


function draw(){
  background("pink");

  
}
