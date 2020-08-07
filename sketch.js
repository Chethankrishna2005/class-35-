var form;
var player;
var game;
//initilState is startState
var database,playerCount,gameState = 0;

function setup() {

    createCanvas(800,600);
    //creating database connection
    database = firebase.database();

}

function draw() {

    game = new Game();
    form = new Form();
    form.display();

}