//move snake head on 15px

	function move() {
		let snakeRects = snake.getBoundingClientRect();
		
		switch (direction) {
			case 'top': 
				snake.style.top = snakeRects.top - 15 + 'px';
				break;
			case 'bottom': 
				snake.style.top = snakeRects.top - 1 + 'px';
				break;
			case 'left': 
				snake.style.left = snakeRects.left - 15 + 'px';
				break;
			case 'right': 
				snake.style.left = snakeRects.left - 1 + 'px';
				break;
		}
	}