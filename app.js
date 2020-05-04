var context;
var shape = new Object();
var m_points=new Object();
var monstersArray;
var board;
var score;
var pac_color;
var start_time;
var currTime;
var time_elapsed;
var interval1;
var interval2;
var interval3;
var interval4;
var interval5;
var interval6;
var interval7;
var interval8;
var interval9;
var interval10;

var pos=4;
var x ;
var lives=5;
var src;
var Mysound;
var clockOnBoard;
var powerOnBoard;
var clockPos;
var currGamePoints;

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
	Start();
}

function finishGame(bool)
{
	//bool ==true it mean it come from end time
	//bool = false it mean it come from end lives
	//gameIsOn=false;
	Mysound.stop();
	stopIntervals();
	if(bool==true)
	{
		if(score<100)
		{
			getScoreForLose();
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

function exitGame()
{
	if(Mysound!=null)
	Mysound.stop();
	stopIntervals();
}

function stopIntervals()
{
	if(Mysound!=null)
	Mysound.stop();
	window.clearInterval(interval1);
	window.clearInterval(interval2);
	window.clearInterval(interval3);
	window.clearInterval(interval4);
	window.clearInterval(interval5);
	window.clearInterval(interval6);
	window.clearInterval(interval7);
	window.clearInterval(interval8);
	window.clearInterval(interval9);
	window.clearInterval(interval10);
}


function Start(){
	getHowManyMonsters();
getHowManyPoints();
getTimeForSetting();
getUp();
getDown();
getLeft();
getRight();
	getUserName();
	monstersArray=new Array();
	currGamePoints=howManyPoints;
	clockOnBoard=false;
	powerOnBoard=false;
	scoreToWin=0;
	Mysound = new sound("music.mp3");
	Mysound.play();
	board = new Array();
	score = 0;
	lives=5;
	monsters_remain=howManyMonster();
	currTime = time;
	boardToZero();

	generetaWalls();
	generateMonsters(monsters_remain, monstersArray);
	generatePacman();
	generateMovingPoints();
	generateFood();
	keysDown = {};

	addEventListener("keydown",	function(e) {
			keysDown[e.keyCode] = true;
		},false
	);

	addEventListener("keyup",function(e) {
			keysDown[e.keyCode] = false;
		},false
	);
	interval1 = setInterval(UpdatePosition, 200);
	interval2 = setInterval(getLives, 250);
	interval3 =setInterval(setTime , 1000);
	interval4=setInterval(putClockIcon,10000);
	interval5=setInterval(updatePositionToMonster,1200);
	interval6=setInterval(updatePositionToMovingCandy,800);
	interval7 = setInterval(getScore, 250);
	interval8 = setInterval(getTime, 250);
	interval9=setInterval(startMusic, 42000);
	interval10=setInterval(putPowerIcon,10000);


}

function startMusic()
{
	Mysound = new sound("music.mp3");
	Mysound.play();
}

function Draw(x) {
	canvas.width = canvas.width; //clean board
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
		currGamePoints--;
	}
	else if (board[shape.i][shape.j] == 5) {
		//eat a 15 point jellyfish
		score=score+15;
		currGamePoints--;
	}
	else if (board[shape.i][shape.j] == 6) {
		//eat a 25 point plankton
		score=score+25;
		currGamePoints--;
	}
	if (board[shape.i][shape.j] == 8) {
		//catch the clock
		currTime=currTime+20;
	}
	if (board[shape.i][shape.j] == 10) {
		//catch the clock
		lives=lives+1;
	}
	if(currGamePoints==0){
		finishGame(true);
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
   	    getLives()
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
	
		Draw(x);
	
}



function putClockIcon()
{
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
		board[clockPos[0]][clockPos[1]] = 0;//represent clock
		clockOnBoard=false;
	}
}

function putPowerIcon()
{
	if(powerOnBoard==false)//need to put the clock on board
	{
	var emptyCell;
	emptyCell = findRandomEmptyCell(board);
	powerPos=emptyCell;
	board[emptyCell[0]][emptyCell[1]] = 10;//represent power
	powerOnBoard=true;
	}
	else //need to remove the clock from the board
	{
		board[powerPos[0]][powerPos[1]] = 0;//represent clock
		powerOnBoard=false;
	}
}

function setTime()
{
	currTime=currTime-1;
	if(currTime<=0 || time<=0)
	{
		finishGame(true);
	}
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

function getHowManyMonsters()
  {
	document.getElementById("display5").innerHTML = howManyMonster();
}

function getHowManyPoints()
  {
	document.getElementById("display6").innerHTML = howManyPoints;
}
function getTimeForSetting()
  {
	document.getElementById("display7").innerHTML = time;
}
function getUp()
  {
	  var temp = moveUp;
	  if(moveUp==38)
	  {
		  temp="upButton";
	  }
	document.getElementById("display8").innerHTML = temp;
}
function getDown()
  {
	var temp = moveDown;
	if(moveDown==40)
	{
		temp="downButton";
	}
	document.getElementById("display9").innerHTML = temp;
}
function getLeft()
  {
	var temp = moveLeft;
	if(moveLeft==37)
	{
		temp="leftButton";
	}
	document.getElementById("display10").innerHTML = temp;
}
function getRight()
  {
	var temp = moveRight;
	if(moveRight==39)
	{
		temp="rightButton";
	}
	document.getElementById("display11").innerHTML = temp;
}


moveUp=38;
	moveDown=40;
	moveRight=39;
	moveLeft=37;