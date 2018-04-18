//move snake head on 9px

	function move() {
		
		let snakeRects = snake.getBoundingClientRect();
		let apple = document.getElementsByClassName('apple')[0];
		/*
		let center = [];
		
		center.push((snakeRects.right - Math.floor((snakeRects.right - snakeRects.left)/2)))  //
		center.push((snakeRects.bottom - Math.floor((snakeRects.bottom - snakeRects.top)/2))) //calculating center of snakehead
		*/
				
		//console.log(document.elementFromPoint(center[0], center[1]));
		
		
		switch (direction) {
			case 'top': 
				snake.style.top = snakeRects.top - fieldRect.top - 9 + 'px';
				if (document.elementFromPoint(snakeRects.left, (snakeRects.top - 9)) == apple) eatApple();
				break;
			case 'bottom': 
				snake.style.top = snakeRects.top - fieldRect.top + 9 + 'px';
				if (document.elementFromPoint(snakeRects.left, (snakeRects.bottom + 9)) == apple) eatApple();
				break;
			case 'left': 
				snake.style.left = snakeRects.left - fieldRect.left - 9 + 'px';
				if (document.elementFromPoint((snakeRects.left - 9), snakeRects.top) == apple) eatApple();
				break;
			case 'right': 
				snake.style.left = snakeRects.left - fieldRect.left + 9 + 'px';
				if (document.elementFromPoint((snakeRects.right + 9), snakeRects.top) == apple) eatApple();
				break;
		}
	}