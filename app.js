var context;
var shape = new Object();
var m_points=new Object();
var board;
var score;
var pac_color;
var start_time;
var currTime;
var time_elapsed;
var interval;
var interval2;
var interval3;
var interval4;
var pos=4;
var x ;
var lives=5;
var scoreToWin;
var src;
var Mysound;
var clockOnBoard;
var clockPos;
$(document).ready(function() {
	context = canvas.getContext("2d");
	//Start();
});

function StartNewGame()
{
	boardToZero();
	Mysound.stop();
	window.alert("new game");	
	stopIntervals();

	/*
	removeEventListener("keydown",function(e) {
		keysDown[e.keyCode] = true;
	},false
);
removeEventListener("keyup",function(e) {
	keysDown[e.keyCode] = false;
},false
);*/

	Start();

}

function stopIntervals()
{
	Mysound.stop();
	window.clearInterval(interval);
	window.clearInterval(interval2);
	window.clearInterval(interval3);
	window.clearInterval(interval4);
	window.clearInterval(interval5);
	window.clearInterval(interval6);
	window.clearInterval(interval7);
	window.clearInterval(interval8);
	window.clearInterval(interval9);
}

function boardToZero()
{
	for (var i = 0; i < 16; i++) {
		board[i] = new Array();
		for(var j = 0;j<10;j++){
			board[i][j]=0;
		}
	}
}
function Start(){
	getUserName();
	clockOnBoard=false;
	powerOnBoard=false;
	scoreToWin=0;
	Mysound = new sound("music.mp3");
	Mysound.play();
	board = new Array();
	score = 0;
	lives=5;
	pac_color = "yellow";
	var cnt = 160;
	var pacman_remain = 1;
	monsters_remain=howManyMonster();
	currTime = time;
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
	generateMovingPoints();
	generateFood();
	console.log("4");
	keysDown = {};

	console.log(scoreToWin);

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
	interval7 = setInterval(getScore, 250);
	interval8 = setInterval(getTime, 250);
	interval3 =setInterval(setTime , 1000);
	interval4=setInterval(putClockIcon,10000);
	interval4=setInterval(putPowerIcon,20000);
	interval5=setInterval(updatePositionToMonster,1500);
	interval6=setInterval(updatePositionToMovingCandy,1500);
	interval9=setInterval(startMusic, 42000);
}

function startMusic()
{
	console.log("music");
	Mysound = new sound("music.mp3");
	 Mysound.play();
}

function Draw(x) {
	canvas.width = canvas.width; //clean board
//	lblScore.value = score;
//	lblTime.value=currTime;
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
			else if (board[i][j] == 1 && !MonsterMeetFood(i,j)) {
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
			else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "black"; //color
				context.fill();
			}
			else if (board[i][j] == 5 && !MonsterMeetFood(i,j)) {
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
			else if (board[i][j] == 6 && !MonsterMeetFood(i,j)) {
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
			else if (board[i][j] == 8) {
				var c = document.getElementById("canvas");
					var ctx = c.getContext("2d");
					var img = document.getElementById("clock");
					ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
				}
				else if (board[i][j] == 10) {
					var c = document.getElementById("canvas");
						var ctx = c.getContext("2d");
						var img = document.getElementById("power");
						ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
					}
		}
	}
	drawMonsters();
	drawMovingPoints();
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
	if (board[shape.i][shape.j] == 8) {
		//catch the clock
		currTime=currTime+20;
	}
	if (board[shape.i][shape.j] == 10) {
		//catch the clock
		lives=lives+1;
	}
	if (pacmanMeetMonster()) {
		lives--;
		score=score-10;
		if(score<0)
			{
				score=0;
			}
			
		if(lives<=0)
		{
		finishGame(false);
		stopIntervals();
		Mysound.stop();
		}
		else
		{
			generatePacman();
			generateMonsters(monsters_remain, monstersArray);
		}
	}
	else if(pacmanMeetMoovingPoints()){
		board[shape.i][shape.j] = 2;
		m_points.i=-1;
        m_points.j=-1;
        score=score+50;
	}
	else{
		board[shape.i][shape.j] = 2;
	}

	if (score ==scoreToWin) {//just for now
		//window.clearInterval(interval);
		Mysound.stop();
		window.alert("Game completed");
	} else {
		Draw(x);
	}
}

function finishGame(bool)
{//bool ==true it mean it come from end time
	//bool = false it mean it come from end lives


	if(bool==true)
	{
		if(score<100)
		{
			getScoreForLose();
			console.log("LOSESCORE")
			var modal = document.getElementById("lostScore");
		    modal.style.display = "block";
		}
		else
		{
			var modal = document.getElementById("win");
		modal.style.display = "block";
		}
	}
	else
	{
		var modal = document.getElementById("lostLives");
		modal.style.display = "block";
	
	}
}
function putClockIcon()
{
	console.log("clockIcon");
	if(clockOnBoard==false)//need to put the clock on board
	{
	var emptyCell;
	emptyCell = findRandomEmptyCell(board);
	clockPos=emptyCell;
	board[emptyCell[0]][emptyCell[1]] = 8;//represent clock
	clockOnBoard=true;
	//board[emptyCell.i][emptyCell.j]=8;
	}
	else //need to remove the clock from the board
	{
		console.log("delete clockicon")
		board[clockPos[0]][clockPos[1]] = 0;//represent clock
		clockOnBoard=false;
	}
}
function putPowerIcon()
{
	console.log("clockIcon");
	if(clockOnBoard==false)//need to put the clock on board
	{
	var emptyCell;
	emptyCell = findRandomEmptyCell(board);
	clockPos=emptyCell;
	board[emptyCell[0]][emptyCell[1]] = 10;//represent power
	clockOnBoard=true;
	}
	else //need to remove the clock from the board
	{
		console.log("delete clockicon")
		board[clockPos[0]][clockPos[1]] = 0;//represent clock
		clockOnBoard=false;
	}
}

function setTime()
{
	//lblTime=time;
	currTime=currTime-1;
	if(currTime<=0 || time<=0)
	{
		console.log("settime");
		finishGame(true);
		stopIntervals();
		Mysound.stop;
		//window.alert("finish time");
	}
}

function isAWall(i,j){
	if(board[i][j]==4){
		return true;
	}
	else{
		return false;
	}
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
			scoreToWin=scoreToWin+25;
		}
		else if(food_remain>howManyPoints-howManyPoints*0.4){//15 points food
			board[emptyCell[0]][emptyCell[1]] = 5;
			scoreToWin=scoreToWin+15;
		}
		else{//5 points food
			board[emptyCell[0]][emptyCell[1]] = 1;
			scoreToWin=scoreToWin+5;
		}
		food_remain--;
	}
	console.log("finish food");

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
}

function getUserName()
{
  document.getElementById("display3").innerHTML = usernameForDisplay;
}

function getScore()
  {
	document.getElementById("display1").innerHTML = score;
}

function getTime()
  {
	document.getElementById("display2").innerHTML = currTime;
}

function getScoreForLose()
  {
	document.getElementById("display4").innerHTML = score;
}