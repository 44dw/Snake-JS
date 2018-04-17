//move snake's body

function moveBody() {
	let tails = document.getElementsByClassName('tail');
	for (let i=0; i<tails.length; i++) {
		let tailRects = tails[i].getBoundingClientRect();
		
		switch(direction) {
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