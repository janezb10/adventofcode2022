const fs = require('fs');
const { type } = require('os');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day13_input.txt', 'utf8')
        .split("\n\n")
        .map(e => {
            return e.split("\n").map(i => JSON.parse(i));
        })
    } catch (err) {
        console.log(err);
    }
}());


let result = 0;
for(i=0;i<inp.length;i++) {
    if(glej(inp[i][0], inp[i][1]) > 0) {
        result += i+1;
    }
}
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
