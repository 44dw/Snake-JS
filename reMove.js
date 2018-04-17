function reMove() {
	stop();
	goHead = setInterval(move, 500); //move snakeHead
	goBody = setInterval(moveBody, 500); //move snakeTail
}