
var moveUp;
var howManyPoints;
var fivepoint1;
var fivepoint2;
var fifteenPoint1;
var fifteenPoint2;
var twentyfivepoint1;
var twentyfivepoint2;
var monster1;
var monster2;
var monster3;
var monster4;
var time;

function GetSetting()
{	
	moveUp=document.getElementById("settingsMoveUp").value;
	howManyPoints = document.getElementById("points").value;
	fivepoint1 = document.getElementById("5Points1").checked;
	fivepoint2 = document.getElementById("5Points2").checked;
	fifteenPoint1 = document.getElementById("15Points1").checked;
	fifteenPoint2 = document.getElementById("15Points2").checked;
	twentyfivepoint1 = document.getElementById("25Points1").checked;
	twentyfivepoint2 = document.getElementById("25Points2").checked;
	monster1 = document.getElementById("1monster").checked;
	monster2 = document.getElementById("2monster").checked;
	monster3 = document.getElementById("3monster").checked;
	monster4 = document.getElementById("4monster").checked;
	time = document.getElementById("time").value;

	Start();
	return show('game' , 'setting');

}

function randomSetting()
{

	//var moveUp=keysDown[38];
	//var moveUp=keysDown[40];
	//var moveUp=keysDown[37]
	//var moveUp=keysDown[39]

	var numRandom=Math.random();
	howManyPoints = numRandom*40+50;

	var numRandom2=Math.random();
	if(numRandom2>0.5)
	{
	fivepoint1 = true;
	fivepoint2 = false;
	}
	else
	{
	fivepoint1 = false;
	fivepoint2 = true;
	}

	var numRandom3=Math.random();
	if(numRandom3>0.5)
	{
	fifteenPoint1 = true;
	fifteenPoint2 = false;
	}
	else{
	fifteenPoint1 = false;
	fifteenPoint2 = true;
	}

	var numRandom4=Math.random();
	if(numRandom4>0.5)
	{
	twentyfivepoint1 = false;
	twentyfivepoint2 = true;
	}
	else
	{
		twentyfivepoint1 = true;
		twentyfivepoint2 = false;
	}

	var numRandom5=Math.random();
	if(numRandom5<0.25)
	{
		monster1 = true;
		monster2 = false;
		monster3 = false;
		monster4 = false;
	}
	else if(numRandom5>=0.25 && numRandom5<0.5)
	{
		monster1 = false;
		monster2 = true;
		monster3 = false;
		monster4 = false;
	}
	else if(numRandom5>=0.50 && numRandom5<0.75)
	{
		monster1 = false;
	monster2 = false;
	monster3 = true;
	monster4 = false;
	}
	else if(numRandom5>=0.75 && numRandom5<=1)
	{
		 monster1 = false;
	monster2 = false;
	monster3 = false;
	monster4 = true;
	}
	
	var numRandom6=Math.random();
	 time = numRandom6*240+60;

	 Start();
	return show('game' , 'setting');
}
