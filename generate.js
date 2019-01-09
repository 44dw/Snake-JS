
//generate snake body under snake head

	function generate() {
		let tails = document.getElementsByClassName('tail');
		let snakeRect = snakeHead.getBoundingClientRect();
		
		let count = 1;
		
		for (let i=0; i<tails.length; i++) {
			tails[i].style.left = snakeRect.left - fieldRect.left + 'px';
			tails[i].style.top = snakeRect.top - fieldRect.top + (9 * count) + 'px';
			count++;
		}

}