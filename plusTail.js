function plusTail() {
	let newTail = document.createElement('div');
	newTail.classList.add('tail2');
	snakeRect = snake.getBoundingClientRect();
	
	switch (direction) {
			case 'right': 
				newTail.style.left = snakeRect.left - fieldRect.left + 'px';
				newTail.style.top = snakeRect.top - fieldRect.top + 'px'
				break;
			}
			/*	
			case 'bottom': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top - (7 * count) + 'px';
					count++;
				}
				break;
			case 'left': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top + (7 * count) + 'px';
					count++;
				}
				break;
			case 'right': 
				for (let i=0; i<tails.length; i++) {
					tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
					tails[i].style.top = snakeRect.top - fieldRect.top + (7 * count) + 'px';
					count++;
				}
				break;
		}*/
	field.appendChild(newTail);
}