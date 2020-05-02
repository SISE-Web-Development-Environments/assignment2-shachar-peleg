function boardToZero()
{
	for (var i = 0; i < 16; i++) {
		board[i] = new Array();
		for(var j = 0;j<10;j++){
			board[i][j]=0;
		}
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

	board[6][6]=4;
	board[6][9]=4;

	board[7][1]=4;
	board[7][3]=4;
	board[7][4]=4;
	board[7][8]=4;
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
	var emptyCell;
	howManyPoints=parseInt(howManyPoints);
	var food_remain=howManyPoints;
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
}

function isOnBoard(i,j){
	if(i>=0 && i<16 && j>=0 && j<10){
		return true;
	}
	return false;
}