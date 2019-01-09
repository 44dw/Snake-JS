function shiftAppleCoords(x, y) {
	
	if (((x + 4) > fieldRect.right) || ((y + 4) > fieldRect.bottom)) { //prevent generate off the field & 
		x -= 4;                                                        //center apples between the cells
		y -= 4;
	} else {
		x += 4;
		y += 4;
	}
	
	return [x, y];
}