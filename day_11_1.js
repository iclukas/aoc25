solve_11_1 = function (inp) {
	let tree = [];
	let map = {};

	inp.split("\n").forEach(line=>{
		line = line.split(": ");
		map[line[0]] = line[1].split(" ")
	});

	const treedrill = function (subtree) {
		map[subtree[subtree.length-1]].forEach(subitem=>{
			if (!subtree.includes(subitem)) {
				subtree.push(subitem);
				if (subitem === "out") {
					tree.push([...subtree]);
				} else {
					treedrill(subtree);
				}
				subtree.pop();
			}
		});
	}
	treedrill(["you"]);
	console.info(tree.length);
}
