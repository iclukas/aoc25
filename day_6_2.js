solve_day_6_2 = function (inp) {
	inp = inp.split("\n");
	const ops = inp.pop();
	let grandtotal = 0;
	let numbers=[];
	let idx=0;
	for (let x=1; x<=ops.length; x++) {
		inp.forEach((n,y)=>{
			if (n.at(-x) !== " ") numbers[idx] = (numbers[idx] || "") + n.at(-x);
		});
		idx++;
		if (ops.at(-x) !== " ") {
			grandtotal += numbers.map(Number).reduce(ops.at(-x) === "*" ? (acc,val)=>acc*val : (acc,val)=>acc+val);
			numbers = [];
			idx=0;
		}
	}
	console.info(grandtotal);
}
