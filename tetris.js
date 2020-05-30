const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const rows = 10;
const columns = 20;
const squareSize = 20;
let board = [];
const BOARDCOLOR = "WHITE";


function drawBoard(){
	for (var r = 0; r < rows; r++){
		for (var c = 0; c < columns; c++){
			drawBlock(r,c,board[r][c]);
		}
	}
};

for (r = 0; r <rows; r++){
	board[r] = [];
	for (c = 0; c < columns; c++){
		board[r][c] = BOARDCOLOR;
	}
}

function drawBlock(rows,columns,color){
	ctx.fillStyle = color;
	ctx.fillRect(rows*squareSize,columns*squareSize,squareSize,squareSize);

	ctx.strokeStyle = "BLACK";
	ctx.strokeRect(rows*squareSize,columns*squareSize,squareSize,squareSize);
}


drawBoard();



const PIECES = [
[Z,"red"],
[S,"green"],
[T,"yellow"],
[O,"blue"],
[L,"purple"],
[I,"cyan"],
[J,"orange"]
];


function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Piece( PIECES[r][0],PIECES[r][1]);
}

let p = randomPiece();
alert(p);


function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces
    this.x = 3;
    this.y = -2;
}