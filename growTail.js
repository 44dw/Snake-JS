function growTail() {
	let last = document.getElementsByClassName('last')[0];
	let lastCoords = getComputedStyle(last);
	let direction = last.dataset.direction;
	last.classList.remove('last');
	
	let newTail = document.createElement('div');
	newTail.classList.add('tail');
	newTail.classList.add('last');
	
	if (direction == 'top') {
		newTail.style.top = parseInt(lastCoords.top) + 9 + 'px';
		newTail.style.left = lastCoords.left;
	}
	if (direction == 'right') {
		newTail.style.top = lastCoords.top;
		newTail.style.left = parseInt(lastCoords.left) - 9 + 'px';
	}
	if (direction == 'bottom') {
		newTail.style.top = parseInt(lastCoords.top) - 9 + 'px';
		newTail.style.left = lastCoords.left;
	}
	if (direction == 'left') {
		newTail.style.top = lastCoords.top;
		newTail.style.left = parseInt(lastCoords.left) + 9 + 'px';
	}
	
	newTail.dataset.direction = direction;
	field.appendChild(newTail);
}