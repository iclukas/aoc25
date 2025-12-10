solve_9_2 = function (inp) {
	const len = inp.length;

	const intersects_any = function (a,b) {
		const xmin = Math.min(a[0], b[0]);
		const xmax = Math.max(a[0], b[0]);
		const ymin = Math.min(a[1], b[1]);
		const ymax = Math.max(a[1], b[1]);
		for (let i=0; i<len; i++) {
			let c = inp[(i + len -1) % len], d = inp[i];
			const xmin2 = Math.min(c[0], d[0]);
			const xmax2 = Math.max(c[0], d[0]);
			const ymin2 = Math.min(c[1], d[1]);
			const ymax2 = Math.max(c[1], d[1]);
			
			if (xmin === xmin2 && xmax === xmax2 && ymin === ymin2 && ymax === ymax2) continue;
			if (xmin2===xmax2) {
				if ((xmin2 > xmin && xmin2 < xmax) && !(ymax2 <= ymin || ymin2 >= ymax)) return true;
			} else {
				if ((ymin2 > ymin && ymin2 < ymax) && !(xmax2 <= xmin || xmin2 >= xmax)) return true;
			}
		}
		return false;

	}

	let largest=0;
	inp.forEach(a=>{
		inp.forEach(b=>{
			const w = Math.abs(a[0]-b[0]) + 1;
			const h = Math.abs(a[1]-b[1]) + 1;
			if (w * h > largest && !intersects_any(a, b)) {
				largest = w * h;
			}
		});
	});
	console.log(largest);
}
