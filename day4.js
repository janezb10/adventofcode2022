const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day4_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

let count = 0;
for(i=0;i<inp.length;i++){
    inp[i] = inp[i].split(",");
    let fP = inp[i][0].split('-');
    let sP = inp[i][1].split('-');
    
    let a1 = +fP[0];
    let a2 = +fP[1];
    let b1 = +sP[0];
    let b2 = +sP[1];
    // 2-4,6-8
    // 2-3,4-5
    // 5-7,7-9
    // 2-8,3-7
    // 6-6,4-6
    // 2-6,4-8

    if(a1 <= b1 && a2 >= b2 || b1 <= a1 && b2 >= a2 ||
        a1 <= b2 && a2 >= b1 || b1<=a2 && b2 >= a1) {
        count++;
    }
}



console.log(count);