function newDirection(event) {
		switch (event.keyCode) {
			case 39: 
				return 'right';
				break;
			case 37: 
				return 'left';
				break;
			case 38: 
				return 'top';
				break;
			case 40: 
				return 'bottom';
				break;
		}
}