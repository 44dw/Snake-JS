function minusTail() {
	let tails = document.getElementsByClassName('tail');
	if (tails.length) tails[tails.length - 1].remove();
}