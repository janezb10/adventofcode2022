const fs = require('fs');
let arr;

(async function readFile() {
    try {
        arr = fs.readFileSync('./day1_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

let newArr = [];
let start = 0;
for(i=0;i<arr.length;i++) {
    if(arr[i]===''){
        newArr.push(arr.slice(start, i));
        start = i+1;
    }
}
for(i=0;i<newArr.length;i++) {
    newArr[i] = newArr[i].reduce((ac,cu) => ac + parseInt(cu), 0);
}
console.log("1. zvezdica: " + Math.max(...newArr));

let top3 = [];
for(i=0;i<3;i++) {
    top3.push(Math.max(...newArr));
    const index = newArr.findIndex(e => e == top3[i]);
    newArr.splice(index,1);
}
total3 = top3.reduce((ac,cv) => ac + cv, 0);

console.log("2. zvezdica: " + total3);