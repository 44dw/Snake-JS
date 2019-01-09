function newApple() {
	let appleCoords = {};
	let tx = Math.floor(getRandom(fieldRect.left, (fieldRect.right - 18))) / 9
	let x = (Math.round(tx) * 9);
	let ty = Math.floor(getRandom(fieldRect.top, (fieldRect.bottom - 18))) / 9
	let y = (Math.round(ty) * 9);

	let result = shiftAppleCoords(x, y);
	
	//if the snake at the result point - new coords, else put apple on it
	(document.elementFromPoint(result[0], result[1]) == field) ? generateApple(result) : newApple();
	
	
}