var movingCandyPos = new Object();


function generateMovingCandy(){
	emptyCell = findRandomEmptyCell(board);
	movingCandyPos.i=emptyCell[0];
	movingCandyPos.j=emptyCell[1];
	board[movingCandyPos.i][movingCandyPos.j]=9;
}

function drawMovingCnady(){
	var center = new Object();
		center.x = movingCandyPos.i * 60 + 30;
		center.y = movingCandyPos.j * 60 + 30;
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		var img = document.getElementById("geri");
		ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
}

function isOnBoard(i,j){
	if(i>=0 && i<16 && j>=0 && j<10){
		return true;
	}
	return false;
}
function updatePositionToMovingCandy()
	{
		var posX=movingCandyPos.i;
		var posY=movingCandyPos.j;

		var num=Math.random();

		if(num<0.25)
		{
		if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			movingCandyPos.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			movingCandyPos.i--;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			movingCandyPos.j++;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			movingCandyPos.j--;
		}
	}
	else if(num>=0.25 && num<0.5)
	{
	 if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			movingCandyPos.j++;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			movingCandyPos.j--;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			movingCandyPos.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			movingCandyPos.i--;
		}
	}
	else if(num>=0.5 && num<0.75)
	{
		if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			movingCandyPos.j--;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			movingCandyPos.j++;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			movingCandyPos.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			movingCandyPos.i--;
		}
	}
	else if(num>=0.75 && num<1)
	{
		if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			movingCandyPos.i--;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move u;
			movingCandyPos.j--;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			movingCandyPos.i++;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			movingCandyPos.j++;
		}
	}
	}
				
				
				
				
			
