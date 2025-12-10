solve_9_1 = function (inp) {
	let largest=0;
	inp.forEach(a=>{
		inp.forEach(b=>{
			const w = Math.abs(a[0]-b[0]) + 1;
			const h = Math.abs(a[1]-b[1]) + 1;
			largest = Math.max(largest, w * h);
		});
	});
	console.info(largest);
}
