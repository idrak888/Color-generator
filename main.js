var btn = document.getElementById('btn1');
var colorBox = document.getElementById('colorBox');


btn.addEventListener("click", generateColor);

function generateColor(){
	var color = ((Math.random() * 5) + 1).toFixed(0);
	var colorName = document.getElementById('colorName');
	if (color == 1) {
		colorName.innerHTML = "You got the color red!"
		colorBox.className = "redBox";
	}
	else if(color == 2){
		colorName.innerHTML = "you got the color blue!"
		colorBox.className = "blueBox";
	}
	else if(color == 3){
		colorName.innerHTML = "you got the color yellow!"
		colorBox.className = "yellowBox";
	}
	else if(color == 4){
		colorName.innerHTML = "you got the color orange!"
		colorBox.className = "orangeBox";
	}
	else if(color == 5){
		colorName.innerHTML = "you got the color green!"
		colorBox.className = "greenBox";
	}
	else if(color == 6){
		colorName.innerHTML = "you got the color purple!"
		colorBox.className = "purpleBox";
	}

};
