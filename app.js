var context;
var shape = new Object();
var monsterPos = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var pos=4;
$(document).ready(function() {
	context = canvas.getContext("2d");
	Start();
});

function Start() {
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 140;
	var food_remain = 50;
	var pacman_remain = 1;
	var monsters_remain=2;
	start_time = new Date();
	for (var i = 0; i < 14; i++) {
		board[i] = new Array();
		for (var j = 0; j < 10; j++) {
			makeWalls(i);
			var randomNum = Math.random();
			if (randomNum <= (1.0 * food_remain) / cnt && board[i][j]!=4) {
				food_remain--;
				var randomNum2 = Math.random();
				if(randomNum2<0.6)
				{
					board[i][j] = 1;
				}
				else if(randomNum2>=0.6 || randomNum2<0.9)
				{
					board[i][j] = 5;
				}
				else{
					board[i][j]=6;
				}
			}
			else if( randomNum <= (1.0 * (monsters_remain+food_remain) / cnt)&& board[i][j]!=4)
			{
				monsters_remain--;
				board[i][j] = 3;
				monsterPos.i=i;
				monsterPos.j=j;
			}
			 else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt && board[i][j]!=4) {
				shape.i = i;
				shape.j = j;
				pacman_remain--;
				board[i][j] = 2;
			} else {
				board[i][j] = 0;
			}
			cnt--;
		}
	}
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
}

function makeWalls(x)
{
	if(x==1)
	{
	board[1][1]=4;
	board[1][3]=4;
	board[1][5]=4;
	board[1][4]=4;
	board[1][7]=4;
	board[1][6]=4;
	}
	else if(x==2)
	{
	board[2][1]=4;
	board[2][3]=4;
	board[2][7]=4;
	}
	else if (x==3){
	board[3][1]=4;
	board[3][3]=4;
	board[3][5]=4;
	board[3][7]=4;
	}
	else if (x==4){
	board[4][1]=4;
	board[4][3]=4;
	board[4][5]=4;
	board[4][6]=4;
	board[4][7]=4;
	}
	else if(x==5)
	{
	
	}
	else if (x==6){
		board[6][4]=4;
		board[6][5]=4;
		board[6][8]=4;
	}
	else if (x==7){
		board[7][4]=4;
		board[7][5]=4;
		board[7][8]=4;
	}
	if(x==8)
	{
		
	}
	if(x==9)
	{
		board[9][1]=4;
	board[9][3]=4;
	board[9][5]=4;
	board[9][6]=4;
	board[9][7]=4;
	}
	if(x==10)
	{
		board[10][1]=4;
	board[10][3]=4;
	board[10][5]=4;
	board[10][7]=4;
	}
	if(x==11)
	{
		board[11][1]=4;
	board[11][3]=4;
	board[11][7]=4;
	}
	if(x==12)
	{
		board[12][1]=4;
	board[12][3]=4;
	board[12][5]=4;
	board[12][4]=4;
	board[12][7]=4;
	board[12][6]=4;
	}
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 13 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 13 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		pos=1;
		return 1;
	}
	if (keysDown[40]) {
		pos=2;
		return 2;
	}
	if (keysDown[37]) {
		pos=3;
		return 3;
	}
	if (keysDown[39]) {
		pos=4;
		return 4;
	}
}

function Draw(x) {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	for (var i = 0; i < 14; i++) {
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
			} else if (board[i][j] == 1) {
				var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("burger");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
			} 
			else if (board[i][j] == 3) {
				var c = document.getElementById("canvas");
  				var ctx = c.getContext("2d");
				  var img = document.getElementById("monster");
				  ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
			}
			else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "black"; //color
				context.fill();
			}
			else if (board[i][j] == 5) {
				var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("monster2");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
			}
			else if (board[i][j] == 6) {
				var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("monster3");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
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
		if (shape.i < 13 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 3) {
		window.clearInterval(interval);
		window.alert("You Lose");	
	}
	if (board[shape.i][shape.j] == 1) {
		//eat a burger
		score++;
	}
	updatePositionToMonster();
	//board[monsterPos.i][monsterPos.j]=3;

	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw(x);
	}

	function updatePositionToMonster()
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
}