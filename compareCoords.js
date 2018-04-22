function compareCoords(segment) {
	if (!turnPoint.length) return false;
	let segRect = segment.getBoundingClientRect();
	for (let i=0; i<turnPoint.length; i++) {
		if ((turnPoint[i].x == segRect.left) && (turnPoint[i].y == segRect.top)) {
			//console.log(turnPoint[i].x + ' ' + turnPoint[i].y + ' ' + turnPoint[i].direction);
			return turnPoint[i].direction;
		} else continue;
	}
	return false;
}