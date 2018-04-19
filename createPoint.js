function createPoint(dir) {
	
	let headRect = snakeHead.getBoundingClientRect();
	
	let obj = {};
	
	obj.x = headRect.left;
	obj.y = headRect.top;
	obj.direction = dir;
	
	turnPoint.push(obj);
	console.log(turnPoint);
}