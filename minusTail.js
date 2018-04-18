function minusTail() {
	let tails = document.getElementsByClassName('tail');
	if ((tails.length) && (firstTurn == false)) tails[tails.length - 1].remove();
	else if ((tails.length) && (firstTurn == true)) tails[0].remove();
}