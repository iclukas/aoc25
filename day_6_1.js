solve_day_6_1 = function (inp) {
    inp = inp.split("\n").map(e=>e.trim().split(/ +/));
    const ops = inp.pop();
    let grandtotal = 0;
    for (let x=0; x<inp[0].length; x++) {
        grandtotal += ops[x]==="*" ? inp.reduce((acc,val)=>acc*Number(val[x]),1) : inp.reduce((acc,val)=>acc+Number(val[x]),0);
    }
    console.info(grandtotal);
}
