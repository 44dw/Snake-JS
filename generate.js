
//generate snake body under snake head

	function generate() {
		let tails = document.getElementsByClassName('tail');
		let snakeRect = snake.getBoundingClientRect();
		
		let count = 1;
		
		switch (direction) {
			case 'top': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top + (9 * count) + 'px';
					count++;
				}
				break;
			case 'bottom': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top - (9 * count) + 'px';
					count++;
				}
				break;
			case 'left': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top + (9 * count) + 'px';
					count++;
				}
				break;
			case 'right': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top + (9 * count) + 'px';
					count++;
				}
				break;
		}

}