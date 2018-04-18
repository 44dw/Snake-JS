function toggleClass() {
	let tempTail = document.getElementsByClassName('temporaryTail');
	for(let i=0; i<tempTail.length; i++) {
		tempTail[i].classList.add('tail');
	}
	let tail = document.getElementsByClassName('tail');
	for(let i=0; i<tail.length; i++) {
		tail[i].classList.remove('temporaryTail');
	}
}