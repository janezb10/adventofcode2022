const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day3_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

let rep = [];
let arr = [];
for(i=0;i<inp.length;i++){
    const half = inp[i].length / 2;
    arr[i] = [];
    arr[i].push(inp[i].slice(0,half));
    arr[i].push(inp[i].slice(half));
    arr[i][0] = arr[i][0].split('').sort();
    arr[i][1] = arr[i][1].split('').sort();
    let repeted = {};
    arr[i][0].forEach(e1 => {
        arr[i][1].forEach(e2 => {
            if(e1 == e2) repeted[e1] = repeted[e1] +1||1 ;
        })
    });
    rep.push(Object.keys(repeted));

}
rep = rep.flat();

let sum = 0;
for(i=0;i<rep.length;i++) {
    const cCA = rep[i].charCodeAt();
    if(cCA < 96) {
        sum += cCA - 38;
    } else {
        sum += cCA - 96;
    }
    //a 97  z 122 A 65 Z 90
}
console.log(sum);