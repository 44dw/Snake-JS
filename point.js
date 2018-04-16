function point(obj) {
	let p = document.createElement('div');
	let x;
	let y;
	for(let name in obj) {
		x = name;
		y = obj[name];
	}
	p.classList.add('point');
	p.style.left = x - fieldRect.left + 'px';
	p.style.top = y - fieldRect.top + 'px';
	field.appendChild(p);
}