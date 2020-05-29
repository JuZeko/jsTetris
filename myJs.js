const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let a;
let b;


let figura = {
	kordinateX:0,
	kordinateY:0,
	greitisX:5,
	greitisY:5,
};

let figuraDraw = {
	kordinateX:0,
	kordinateY:0,
};



let movement = {
	
	

	moveDown() {

		figura.kordinateY += figura.greitisY;
		
		draw(figura);

	}

}

setInterval(function(){ movement.moveDown() }, 100);

function draw(figura) {

	let smth=[];

	
	if(figura.kordinateY == 120){

		a = figura.kordinateY;
		b = figura.kordinateX;


		smth.push(a);
		smth.push(b);

		figura.greitisY = 5;
		figura.kordinateY=0;

	}

	
	

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
	ctx.fillRect(figura.kordinateX, figura.kordinateY, 30, 30);

	for (var i = smth.length - 1; i >= 0; i--) {
		ctx.fillRect(smth[i+1], smth[i], 30, 30);
	}

	ctx.fillRect(b, a, 30, 30);

	

	
}
