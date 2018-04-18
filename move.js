//move snake head on 9px

	function move() {
		
		let snakeRects = snake.getBoundingClientRect();
		
		switch (direction) {
			case 'top': 
				snake.style.top = snakeRects.top - fieldRect.top - 9 + 'px';
				break;
			case 'bottom': 
				snake.style.top = snakeRects.top - fieldRect.top + 9 + 'px';
				break;
			case 'left': 
				snake.style.left = snakeRects.left - fieldRect.left - 9 + 'px';
				break;
			case 'right': 
				snake.style.left = snakeRects.left - fieldRect.left + 9 + 'px';
				break;
		}
	}