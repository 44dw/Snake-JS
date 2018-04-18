	function stop() {
		clearInterval(intervals.head);
		clearInterval(intervals.body);
		clearInterval(intervals.minus);
		clearInterval(intervals.plus);
	}