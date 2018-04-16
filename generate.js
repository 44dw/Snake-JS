
//generate snake body under snake head

	function generate() {
		let tails = document.getElementsByClassName('tail');
		let snakeRects = snake.getBoundingClientRect();
		let fieldRects = field.getBoundingClientRect();
		
		let count = 1;
		
		switch (direction) {
			case 'top': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRects.left - fieldRects.left + 'px';
					tails[i].style.top = snakeRects.top - fieldRects.top + (7 * count) + 'px';
					count++;
				}
				break;
			case 'bottom': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRects.left - fieldRects.left + 'px';
					tails[i].style.top = snakeRects.top - fieldRects.top - (7 * count) + 'px';
					count++;
				}
				break;
			case 'left': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRects.left - fieldRects.left + 'px';
					tails[i].style.top = snakeRects.top - fieldRects.top + (7 * count) + 'px';
					count++;
				}
				break;
			case 'right': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRects.left - fieldRects.left + 'px';
					tails[i].style.top = snakeRects.top - fieldRects.top + (7 * count) + 'px';
					count++;
				}
				break;
		}