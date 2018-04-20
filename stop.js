	function stop() {
		clearInterval(intervals.head);
		clearInterval(intervals.body);
		field.style.background = 'black';
		for (let i=field.children.length; i>0; i--) {
			field.children[0].remove();
		}
		let over = document.createElement('div');
		over.classList.add('over');
		over.innerHTML = 'GAME OVER';
		field.appendChild(over);
	}