//move snake's body

function moveBody() {
	let tails = document.getElementsByClassName('tail');
	for (let i=0; i<tails.length; i++) {
		let tailRects = tails[i].getBoundingClientRect();
		
		if (compareCoords(tails[i])) {
			tails[i].dataset.direction = compareCoords(tails[i]);
			if (tails[i].classList.contains('last')) turnPoint.splice(0, 1);
			}
		
		switch(tails[i].dataset.direction) {
			case 'top': 
				tails[i].style.top = tailRects.top - fieldRect.top - 9 + 'px';
				break;
			case 'bottom':
				tails[i].style.top = tailRects.top - fieldRect.top + 9 + 'px';
				break;
			case 'left': 
				tails[i].style.left = tailRects.left - fieldRect.left - 9 + 'px';
				break;
			case 'right':
				tails[i].style.left = tailRects.left - fieldRect.left + 9 + 'px';
				break;
		}
		
	}
}