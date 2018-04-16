	function move() {
		let snakeRects = snake.getBoundingClientRect();
		
		switch (direction) {
			case 'top': snake.style.top = snakeRects.top - 15 + 'px';
			case 'bottom': snake.style.top = snakeRects.top + 15 + 'px';
			case 'left': snake.style.left = snakeRects.left - 15 + 'px';
			case 'right': snake.style.left = snakeRects.left + 15 + 'px';
		}
		//generate();
	}