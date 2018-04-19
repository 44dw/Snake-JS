function removePoint() {
	turnPoint = []; //null turn points array
	let points = document.getElementsByClassName('point');
	
	points[0].classList.add('tail');
	points[0].classList.remove('point');
	
	if (!document.getElementsByClassName('point').length) {
		move();
		reMove();
	}  //start move
}