const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let smth=[];
let suma =0;

let figura = {
	kordinateX:0,
	kordinateY:0,
	greitisX:0,
	greitisY:3,
};


let movement = {
	
	

	moveDown() {

		figura.kordinateY += figura.greitisY;
		
		draw(figura);

	}

}

setInterval(function(){ movement.moveDown() }, 100);



function draw(figura) {


	for (var i = smth.length - 1; i >= 0; i--) {

		if (smth[i].y == figura.kordinateY + 30 && smth[i].x == figura.kordinateX ){

			let fake = {
				x:figura.kordinateX,
				y:figura.kordinateY,
			};

			smth.push(fake);

			figura.greitisY = 3;
			figura.kordinateY = 0;
		}
	} 






	if(figura.kordinateY == 120 ){

		let fake = {
			x:figura.kordinateX,
			y:figura.kordinateY,
		};

		smth.push(fake);

		figura.greitisY = 3;
		figura.kordinateY = 0;
		figura.kordinateX = 90;

		
	}

	for (var j = 0; j < smth.length; j++) {
		let suma = 0;
		for(var jj = j+1; jj < smth.length; jj++)
		{

			
			if (smth[j].y == smth[jj].y && smth[j].x != smth[jj].x) {
				suma +=30;
				
			}

			if(suma == 270){

				let a = smth[j].y;
				smth = smth.filter(item => item.y != smth[j].y);
				for (var i = 0; i < smth.length; i++) {
					
					smth[i].y += 30;

				}
			}

		}
	}






	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillRect(figura.kordinateX, figura.kordinateY, 30, 50);

	for (var i = smth.length - 1; i >= 0; i--) {

		ctx.fillRect(smth[i].x, smth[i].y, 30, 30);

	}

}




window.addEventListener('keydown',this.check,false);

function check(e) {
	var code = e.keyCode;
    //Up arrow pressed
    if (code == 37){

    	figura.kordinateX -=30;
    }
    if(code == 39){
    	figura.kordinateX +=30;
    }
    if(code == 40){
    	figura.kordinateY = 120;
    	figura.greitisY = 0;
    }
}