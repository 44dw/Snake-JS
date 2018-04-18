function reMove() {
	stop();
	goHead = setInterval(move, 500); //move snakeHead
	intervals.head = goHead;
	goBody = setInterval(moveBody, 500); //move snakeTail
	intervals.body = goBody;
}