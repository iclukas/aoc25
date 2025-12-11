solve_11_1 = function (inp) {
	let map = {};

	inp.split("\n").forEach(line=>{
		line = line.split(": ");
		map[line[0]] = line[1].split(" ")
	});

	const treedrill = function (item) {
		if (map[item].includes("out")) return 1;
		let ctr = 0;
		map[item].forEach(subitem=>{
			ctr += treedrill(subitem);
		});
		return ctr;
	}
	console.info(treedrill("you"));
}
