function newDirection(event) {
	let direction = snakeHead.dataset.direction;
		switch (event.keyCode) {
			case 39:
				if ((direction == 'right') || (direction == 'left')) return 
				else return 'right';
				break;
			case 37: 
				if ((direction == 'left') || (direction == 'right')) return 
				else return 'left';
				break;
			case 38: 
				if ((direction == 'top') || (direction == 'bottom')) return 
				else return 'top';
				break;
			case 40: 
				if ((direction == 'bottom') || (direction == 'top')) return 
				else return 'bottom';
				break;
		}
}