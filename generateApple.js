function generateApple(arr) {
	let apple = document.createElement('div');
	apple.classList.add('apple');
	apple.style.top = arr[1] - fieldRect.top + 'px';
	apple.style.left = arr[0] - fieldRect.left + 'px';
	field.appendChild(apple);
}