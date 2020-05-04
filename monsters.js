var monsterPos = new Object();
var monstersArray= new Array();
var monsters_remain;


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
function generateMonsters(monstersNum, monstersArray){
	var monsterPos0 = new Object();
	monsterPos0.i=0;
	monsterPos0.j=0;
	monstersArray[0]=monsterPos0;
	if(monstersNum>1){
		var monsterPos1 = new Object();
		monsterPos1.i=15;
		monsterPos1.j=9;
		monstersArray[1]=monsterPos1;
	}
	if(monstersNum>2){
		var monsterPos2 = new Object();
		monsterPos2.i=0;
		monsterPos2.j=9;
		monstersArray[2]=monsterPos2;
	}
	if(monstersNum>3){
		var monsterPos3 = new Object();
		monsterPos3.i=15;
		monsterPos3.j=0;
		monstersArray[3]=monsterPos3;
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

function MonsterMeetFood(i,j)
{
	for(index=0; index<monstersArray.length;index++){
		if(i==monstersArray[index].i && j==monstersArray[index].j){
			return true;
		}
	}
	return false;
}

function updatePositionToMonster()//need to add monster as argument or to do for all monstersArray
	{
		var posX=shape.i;
		var posY=shape.j;
		var monsterPosX;
		var monsterPosY;

		for(index=0;index<monstersArray.length;index++){
			monsterPosX=monstersArray[index].i;
			monsterPosY=monstersArray[index].j;
			if(posX-monsterPosX>0){
				if(isOnBoard(monsterPosX+1,monsterPosY) && !isAWall(monsterPosX+1,monsterPosY)){//want move right
					monstersArray[index].i++;
				}
				else{
					if(posY-monsterPosY>0){
						if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
							monstersArray[index].j++;
						}
						else if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
							monstersArray[index].j--;
						}
						else if(isOnBoard(monsterPosX-1,monsterPosY) && !isAWall(monsterPosX-1,monsterPosY)){//want move left
							monstersArray[index].i--;
						}
					}
					else{
						if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
							monstersArray[index].j--;
						}
						else if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
							monstersArray[index].j++;
						}
						else if(isOnBoard(monsterPosX-1,monsterPosY) && !isAWall(monsterPosX-1,monsterPosY)){//want move left
							monstersArray[index].i--;
						}
					}
				}
			}
			else if(posX-monsterPosX<0){
				if(isOnBoard(monsterPosX-1,monsterPosY) && !isAWall(monsterPosX-1,monsterPosY)){//want move left
					monstersArray[index].i--;
				}
				else{
					if(posY-monsterPosY>0){
						if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
							monstersArray[index].j++;
						}
						else if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
							monstersArray[index].j--;
						}
						else if(isOnBoard(monsterPosX+1,monsterPosY) && !isAWall(monsterPosX+1,monsterPosY)){//want move right
							monstersArray[index].i++;
						}
					}
					else{
						if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
							monstersArray[index].j--;
						}
						else if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
							monstersArray[index].j++;
						}
						else if(isOnBoard(monsterPosX+1,monsterPosY) && !isAWall(monsterPosX+1,monsterPosY)){//want move right
							monstersArray[index].i++;
						}
					}
				}
			}
			else{
				if(posY-monsterPosY>0){
					if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
						monstersArray[index].j++;
					}
					else if(isOnBoard(monsterPosX+1,monsterPosY) && !isAWall(monsterPosX+1,monsterPosY)){//want move right
						monstersArray[index].i++;
					}
					else if(isOnBoard(monsterPosX-1,monsterPosY) && !isAWall(monsterPosX-1,monsterPosY)){//want move left
						monstersArray[index].i--;
					}
					else if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
						monstersArray[index].j--;
					}
				}
				else{
					if(isOnBoard(monsterPosX,monsterPosY-1) && !isAWall(monsterPosX,monsterPosY-1)){//want move up
						monstersArray[index].j--;
					}
					else if(isOnBoard(monsterPosX+1,monsterPosY) && !isAWall(monsterPosX+1,monsterPosY)){//want move right
						monstersArray[index].i++;
					}
					else if(isOnBoard(monsterPosX-1,monsterPosY) && !isAWall(monsterPosX-1,monsterPosY)){//want move left
						monstersArray[index].i--;
					}
					else if(isOnBoard(monsterPosX,monsterPosY+1) && !isAWall(monsterPosX,monsterPosY+1)){//want move down
						monstersArray[index].j++;
					}
				}
			}

		}
}
