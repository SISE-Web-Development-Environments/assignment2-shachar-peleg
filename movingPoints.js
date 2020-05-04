
function drawMovingPoints(){
    if(isOnBoard(m_points.i,m_points.j)){
        var center=new Object();
        center.x = m_points.i * 60 + 30;
	    center.y = m_points.j * 60 + 30;
	    var c = document.getElementById("canvas");
	    var ctx = c.getContext("2d");
	    var img = document.getElementById("gerri");
	    ctx.drawImage(img, center.x-24, center.y-24 , 50 , 50);
    }
}

function generateMovingPoints(){
    var emptyCell = findRandomEmptyCell(board);
	m_points.i=emptyCell[0];
	m_points.j=emptyCell[1];
}

function randomMove(){
    if(!isOnBoard(m_points.i,m_points.j)){
        return false;
    }
    var r_move;
    var cell_found=false;
    while(!cell_found){
        r_move = Math.floor(Math.random() * 4);
        if(r_move==0){//up
            if(isOnBoard(m_points.i-1,m_points.j) && !isAWall(m_points.i-1,m_points.j)){
                cell_found=true;
                m_points.i--;
            }
        }
        else if(r_move==1){//down
            if(isOnBoard(m_points.i+1,m_points.j) && !isAWall(m_points.i+1,m_points.j)){
                cell_found=true;
                m_points.i++;
            }
        }
        else if(r_move==2){//right
            if(isOnBoard(m_points.i,m_points.j+1) && !isAWall(m_points.i,m_points.j+1)){
                cell_found=true;
                m_points.j++;
            }
        }
        else{//left
            if(isOnBoard(m_points.i,m_points.j-1) && !isAWall(m_points.i,m_points.j-1)){
                cell_found=true;
                m_points.j--;
            }
        }
    }
}

function updatePositionToMovingCandy()
	{
		var posX=m_points.i;
		var posY=m_points.j;

		var num=Math.random();

		if(num<0.25)
		{
		if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			m_points.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			m_points.i--;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			m_points.j++;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			m_points.j--;
		}
	}
	else if(num>=0.25 && num<0.5)
	{
	 if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
        m_points.j++;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			m_points.j--;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			m_points.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			m_points.i--;
		}
	}
	else if(num>=0.5 && num<0.75)
	{
		if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move up;
			m_points.j--;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			m_points.j++;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			m_points.i++;
		}
		else if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			m_points.i--;
		}
	}
	else if(num>=0.75 && num<1)
	{
		if(isOnBoard(posX-1,posY) && board[posX-1][posY]!=4){//want move left
			m_points.i--;
		}
		else if(isOnBoard(posX,posY-1) && board[posX][posY-1]!=4){//want move u;
			m_points.j--;
		}
		else if(isOnBoard(posX+1,posY) && board[posX+1][posY]!=4){//want move right
			m_points.i++;
		}
		else if(isOnBoard(posX,posY+1) && board[posX][posY+1]!=4){//want move down
			m_points.j++;
		}
	}
	}
	