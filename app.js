var context;
var shape = new Object();
var monsterPos = new Object();
var monstersArray= new Array();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var interval2;
var pos=4;
var x ;
var lives=5;
var src;
var Mysound;
var monsters_remain;
$(document).ready(function() {
	context = canvas.getContext("2d");
	//Start();
});

function Start(){
	Mysound = new sound("music.mp3");
	Mysound.play();
	board = new Array();
	score = 0;
	//lives=5;
	pac_color = "yellow";
	var cnt = 160;
	var pacman_remain = 1;
	monsters_remain=howManyMonster();
	start_time = new Date();
	for (var i = 0; i < 16; i++) {
		board[i] = new Array();
		for(var j = 0;j<10;j++){
			board[i][j]=0;
		}
	}

	generetaWalls();
	generateMonsters(monsters_remain, monstersArray);
	generatePacman();
	console.log("3");
	generateFood();
	console.log("4");
	keysDown = {};

	addEventListener("keydown",	function(e) {
			keysDown[e.keyCode] = true;
		},false
	);
	addEventListener("keyup",function(e) {
			keysDown[e.keyCode] = false;
		},false
	);
	interval = setInterval(UpdatePosition, 250);
	interval2 = setInterval(getLives, 250);

}

function Draw(x) {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {

				if(x==null)
				{
					x=pos
				}
				if(x==1)
				{
				var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("pacmanup");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else if(x==2)
				{
					var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("pacmandown");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else if(x==3)
				{
					var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("pacmanleft");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else if(x==4)
				{
					var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("pacmanright");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}	
			} 
			else if (board[i][j] == 1) {
				if(fivepoint1==true)
				{
				var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("burger");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else
				{
					var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("pineapple");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
			} 
			/*
			else if (board[i][j] == 3) {
				var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("monster");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
			}
			*/
			else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "black"; //color
				context.fill();
			}
			else if (board[i][j] == 5) {
				if(fifteenPoint1==true)
				{
				var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("jelly1");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else
				{
					var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("jelly2");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
			}
			else if (board[i][j] == 6) {
				if(twentyfivepoint1==true)
				{
				var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("plankton1");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else
				{
					var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("plankton2");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
			}
		}
	}
	drawMonsters();
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	x=GetKeyPressed();
	movePacman(x);
	
	if (board[shape.i][shape.j] == 1) {
		//eat a 5 point burger
		score=score+5;
	}
	else if (board[shape.i][shape.j] == 5) {
		//eat a 15 point jellyfish
		score=score+15;
	}
	else if (board[shape.i][shape.j] == 6) {
		//eat a 25 point plankton
		score=score+25;
	}

	if (board[shape.i][shape.j] == 3) {
		if(lives==1)
		{
		window.clearInterval(interval);
		Mysound.stop();
		window.alert("You Lose");	
		}
		else
		{
			lives--;
			generatePacman();
		}
	}
	else{
		board[shape.i][shape.j] = 2;
	}
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
//	if (score >= 20 && time_elapsed <= 10) {
	//	pac_color = "green";
//	}
	if (score >=500) {//just for now
		//window.clearInterval(interval);
		Mysound.stop();
		window.alert("Game completed");
	} else {
		Draw(x);
	}
}

function movePacman(x)
{
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 15 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
}

function updatePositionToMonster()//need to add monster as argument or to do for all monstersArray
	{
		var posX=pos.i;
		var posY=pos.j;
		var monsterPosX=monsterPos.i;
		var monsterPosY=monsterPos.j;

		if(Math.abs(posX-monsterPosX)<Math.abs(posY-monsterPosY))
		{//we are much close to the pacman in x
			if(posX-monsterPosX>0)
			{//pacman is right
				if (monsterPosX < 13 && board[monsterPosX + 1][monsterPosY] != 4) {
					monsterPosX++;
				}
				else if (monsterPosX > 0 && board[monsterPosX - 1][monsterPosY] != 4) {
					monsterPosX--;
				}
				else if (monsterPosY > 0 && board[monsterPosX][monsterPosY+1] != 4) {
					monsterPosY++;
				}
				else if (monsterPosY > 0 && board[monsterPosX][monsterPosY-1] != 4) {
					monsterPosY--;
				}
			}
			else
			{//pacman is down

			}
		}
		else if(Math.abs(posX-monsterPosX)>Math.abs(posY-monsterPosY))
		{//we are much close to the pacman in y
			if(posY-monsterPosY>0)
			{//pacman is right

			}
			else
			{//pacman is left

			}
		}
		monsterPos.i=monsterPosX;
		monsterPos.j=monsterPosY;
}






function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 16);
	var j = Math.floor(Math.random() * 10);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 16 );
		j = Math.floor(Math.random() * 10  );
	}
	return [i, j];
}
function GetKeyPressed() {
	if (keysDown[moveUp]) {
		pos=1;
		return 1;
	}
	if (keysDown[moveDown]) {
		pos=2;
		return 2;
	}
	if (keysDown[moveLeft]) {
		pos=3;
		return 3;
	}
	if (keysDown[moveRight]) {
		pos=4;
		return 4;
	}
}
function howManyMonster(){
	if(monster1==true){
		return 1;
	}
	if(monster2==true){
		return 2;
	}
	if(monster3==true){
		return 3;
	}
	if(monster4==true){
		return 4;
	}
}
function generetaWalls(){
	board[1][1]=4;
	board[1][3]=4;
	board[1][4]=4;
	board[1][7]=4;
	board[1][6]=4;

	board[2][1]=4;
	board[2][3]=4;
	board[2][7]=4;

	board[3][1]=4;
	board[3][2]=4;
	board[3][3]=4;
	board[3][5]=4;
	board[3][7]=4;
	board[3][8]=4;

	board[4][1]=4;
	board[4][3]=4;
	board[4][5]=4;
	board[4][7]=4;

	board[5][1]=4;
	board[5][3]=4;
	board[5][5]=4;
	board[5][6]=4;
	board[5][7]=4;

	board[6][1]=4;
	board[6][3]=4;
	board[6][5]=4;
	board[6][6]=4;
	board[6][7]=4;

	board[7][6]=4;
	board[7][9]=4;

	board[8][1]=4;
	board[8][3]=4;
	board[8][4]=4;
	board[8][8]=4;
	board[8][9]=4;

	board[9][6]=4;
	board[9][9]=4;

	board[10][1]=4;
	board[10][3]=4;
	board[10][5]=4;
	board[10][6]=4;
	board[10][7]=4;

	board[11][1]=4;
	board[11][3]=4;
	board[11][5]=4;
	board[11][7]=4;

	board[12][1]=4;
	board[12][2]=4;
	board[12][3]=4;
	board[12][5]=4;
	board[12][7]=4;
	board[12][8]=4;

	board[13][1]=4;
	board[13][3]=4;
	board[13][7]=4;

	board[14][1]=4;
	board[14][3]=4;
	board[14][4]=4;
	board[14][6]=4;
	board[14][7]=4;
}
function generateMonsters(monstersNum, monstersArray){
	board[0][0]=3;
	var monsterPos0 = new Object();
	monsterPos0.i=0;
	monsterPos0.j=0;
	monstersArray[0]=monsterPos0;
	if(monstersNum>1){
		board[15][9]=3;
		var monsterPos1 = new Object();
		monsterPos1.i=15;
		monsterPos1.j=9;
		monstersArray[1]=monsterPos1;
	}
	if(monstersNum>2){
		board[0][9]=3;
		var monsterPos2 = new Object();
		monsterPos2.i=0;
		monsterPos2.j=9;
		monstersArray[2]=monsterPos2;
	}
	if(monstersNum>3){
		board[15][0]=3;
		var monsterPos3 = new Object();
		monsterPos3.i=15;
		monsterPos3.j=0;
		monstersArray[3]=monsterPos3;
	}
	console.log("finish monster");
}
function generatePacman(){
	var emptyCell = findRandomEmptyCell(board);
	shape.i=emptyCell[0];
	shape.j=emptyCell[1];
	board[shape.i][shape.j] = 2;
	pos=4;
}
function generateFood(){
	console.log(howManyPoints);
	var emptyCell;
	howManyPoints=parseInt(howManyPoints);
	var food_remain=howManyPoints;
	console.log(food_remain);
	while(!food_remain==0){
		emptyCell = findRandomEmptyCell(board);
		if(food_remain>howManyPoints-howManyPoints*0.1){//25 points food
			board[emptyCell[0]][emptyCell[1]] = 6;
		}
		else if(food_remain>howManyPoints-howManyPoints*0.4){//15 points food
			board[emptyCell[0]][emptyCell[1]] = 5;
		}
		else{//5 points food
			board[emptyCell[0]][emptyCell[1]] = 1;
		}
		food_remain--;
	}
	console.log("finish food");

}

function pacmanMeetMonster(){
	for(index=0; index<monstersArray.length;index++){
		if(shape.i==monstersArray[index].i && shape.j==monstersArray[index].j){
			return true;
			debugger;
		}
		else{
			return false;
		}
	}
}

function drawMonsters(){
	var center = new Object();
	for(index=0;index<monstersArray.length;index++){
		center.x = monstersArray[index].i * 60 + 30;
		center.y = monstersArray[index].j * 60 + 30;
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		var img = document.getElementById("monster");
		ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
	}
}


function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
	  this.sound.play();
	}
	this.stop = function(){
	  this.sound.pause();
	}
  }

  function getLives()
  {
	document.getElementById("display").innerHTML = lives;

	//document.getElementById("lives").innerHTML = lives;
  }