solve_10_1 = function (inp) {
	let target = [];
	let allbuttons = [];
	inp.split("\n").forEach(line=>{
		let btn = [];
		line.split(" ").forEach(e=>{
		if (e.at(0)==="[") target.push(e.slice(1,-1));
		else if (e.at(0)==="(") btn.push(e.slice(1,-1).split(",").map(Number));
		});
		allbuttons.push(btn);
  });

	let matrix = "";

	const push = function (button) {
		button.forEach(b=>{
			matrix = matrix.slice(0,b) + (matrix.at(b)==="."?"#":".") + matrix.slice(b+1);
		});
	}

	const mash_buttons = function(combo, buttons, target) {
		for (let i in combo) {
			push(buttons[combo[i]]);
			if (matrix === target) return Number(i)+1;
		}
		return -1;
	}

	const getCombos = function (a) {
		const result = [], len = a.length;
		let length = 1;
		function generateSubsets(currentSubset, start) {
			if (currentSubset.length === length) {
				result.push([...currentSubset]);
				return;
			}
			for (let i=start; i<len; i++) {
				currentSubset.push(a[i]);
				generateSubsets(currentSubset, i+1);
				currentSubset.pop();
			}
		}
		for (length=1; length<=len; length++) generateSubsets([], 0);
		return result;
	}

	let pushesTotal = 0;

	for (let i in allbuttons) {
		let combos = getCombos([...allbuttons[i].keys()]);
		let pushesMin = Infinity;
		for (let combo of combos) {
			if (combo.length > pushesMin) break;
			matrix = ".".repeat(target[i].length);
			let pushes = mash_buttons(combo, allbuttons[i], target[i]);
			if (pushes > 0) pushesMin = pushes;
		}
		if (pushesMin === Infinity) console.error("uh oh");
		pushesTotal += pushesMin;
	}
	
	console.info(pushesTotal);
}
