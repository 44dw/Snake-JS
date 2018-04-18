function removePoint() {
	turnPoint = []; //null turn points array
	let points = document.getElementsByClassName('point');
	
	points[0].remove(); //delete last point
	
	if (!document.getElementsByClassName('point').length) reMove(); //start move
}