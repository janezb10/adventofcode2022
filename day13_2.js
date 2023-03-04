const fs = require('fs');
const { type } = require('os');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day13_input.txt', 'utf8')
        .split("\n")
        .filter(e => e !== "")
        .map(e => JSON.parse(e));
    } catch (err) {
        console.log(err);
    }
}());
a = [[2]];
b = [[6]];
inp.push(a, b);

inp.sort(glej).reverse();

const aa = inp.indexOf(a) +1;
const bb = inp.indexOf(b) +1;
result = aa * bb;

console.log(result);


function glej(left, right) {
    if(typeof left === 'number' && typeof right === 'number') {
        return right - left;
    }
    if(typeof right === 'number') {
        return glej(left, [right]);
    }
    if(typeof left === 'number') {
        return glej([left], right);
    }
    
    let i = 0;
    while(i < Math.min(left.length, right.length)) {
        let a = glej(left[i], right[i]);
        if(a !==0) {
            return a;
        }
        i++;
    }
    return right.length - left.length;
}