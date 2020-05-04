
function pacmanMeetMoovingPoints(){
	if(shape.i==m_points.i && shape.j==m_points.j){
		return true;
	}
	else{
		return false;
	}
}

function pacmanMeetMonster(){
	for(index=0; index<monstersArray.length;index++){
		if(shape.i==monstersArray[index].i && shape.j==monstersArray[index].j){
			return true;
		}
	}
	return false;
}


function generatePacman(){
	var emptyCell = findRandomEmptyCell(board);
	shape.i=emptyCell[0];
	shape.j=emptyCell[1];
	board[shape.i][shape.j] = 2;
	pos=4;//every time the draw will draw him with the face to right
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
