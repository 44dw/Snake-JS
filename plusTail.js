function plusTail() {
	let newTail = document.createElement('div');
	newTail.classList.add('temporaryTail');
	snakeRect = snake.getBoundingClientRect();
	
	newTail.style.left = snakeRect.left - fieldRect.left + 'px';
	newTail.style.top = snakeRect.top - fieldRect.top + 'px'

	//insertAfter(newTail, snake);
	
	field.appendChild(newTail);
	
	let stoper = new CustomEvent('stoper', {
		bubbles: true,
		detail: 1
	});
	field.dispatchEvent(stoper);
}