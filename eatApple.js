function eatApple() {
	document.getElementsByClassName('apple')[0].remove();
	growTail();
	score.innerHTML = +score.textContent + 100;
	newApple();
}