const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let figura = {
	kordinateX:0,
	kordinateY:0,
	greitisX:5,
	greitisY:5,

	move() {

		this.kordinateY += this.greitisY;
	
		this.check();
		draw();

	},

	check (){

		if (this.kordinateY == 120) {
		 this.greitisY = 0;
		}
		
		
	}
	
};

setInterval(function(){ figura.move() }, 100);



function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(figura.kordinateX, figura.kordinateY, 30, 30);
	ctx.beginPath();
	ctx.stroke();
}
