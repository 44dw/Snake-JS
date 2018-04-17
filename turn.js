function turn(event) {
		let snakeRect = snake.getBoundingClientRect(); //get snakeHead coords
		let obj = {}; 
		obj[snakeRect.left] = snakeRect.top; 
		turnPoint.push(obj); //protocol coords of turn point
		point(obj); //create turn point
		switch (event.keyCode) {
			case 39: 
				direction = 'right';
				break;
			case 37: 
				direction = 'left';
				break;
			case 38: 
				direction = 'top';
				break;
			case 40: 
				direction = 'bottom';
				break;
		}
}