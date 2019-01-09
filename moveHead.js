//move snake head on 9px

function moveHead() {
		
	let snakeRects = snakeHead.getBoundingClientRect();
	let apple = document.getElementsByClassName('apple')[0];
	
	if (compareCoords(snakeHead)) snakeHead.dataset.direction = compareCoords(snakeHead);
	
	switch (snakeHead.dataset.direction) {
		case 'top': 
			snakeHead.style.top = snakeRects.top - fieldRect.top - 9 + 'px';
			if (document.elementFromPoint(snakeRects.left, snakeRects.top) == apple) eatApple();
			if (fieldRect.top > snakeRects.top - 9) stop();
			if (document.elementFromPoint(snakeRects.left, (snakeRects.top - 9)).classList.contains('tail')) stop();
			break;
		case 'bottom': 
			snakeHead.style.top = snakeRects.top - fieldRect.top + 9 + 'px';
			if (document.elementFromPoint(snakeRects.left, snakeRects.bottom) == apple) eatApple();
			if (fieldRect.bottom < snakeRects.bottom + 9) stop();
			if (document.elementFromPoint(snakeRects.left, (snakeRects.bottom + 9)).classList.contains('tail')) stop();
			break;
		case 'left': 
			snakeHead.style.left = snakeRects.left - fieldRect.left - 9 + 'px';
			if (document.elementFromPoint(snakeRects.left, snakeRects.top) == apple) eatApple();
			if (fieldRect.left > snakeRects.left - 9) stop();
			if (document.elementFromPoint((snakeRects.left - 9), snakeRects.top).classList.contains('tail')) stop();
			break;
		case 'right': 
			snakeHead.style.left = snakeRects.left - fieldRect.left + 9 + 'px';
			if (document.elementFromPoint(snakeRects.right, snakeRects.top) == apple) eatApple();
			if (fieldRect.right < snakeRects.right + 9) stop();
			if (document.elementFromPoint((snakeRects.right + 9), snakeRects.top).classList.contains('tail')) stop();
			break;
		}
}