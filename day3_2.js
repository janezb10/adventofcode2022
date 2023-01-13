const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day3_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

let arr = [];
const chunkSize = 3;
for(i=0;i<inp.length;i+=chunkSize){
    const chunk = inp.slice(i,i+chunkSize);
    arr.push(chunk);
}



let rep = [];
for(i=0;i<arr.length;i++){
    arr[i][0] = arr[i][0].split("");
    arr[i][1] = arr[i][1].split("");
    arr[i][2] = arr[i][2].split("");
    let repeted = {};

    arr[i][0].forEach(e1 => {
        arr[i][1].forEach(e2 => {
            arr[i][2].forEach(e3 => {
                if(e1 == e2 && e1 == e3) repeted[e1] = repeted[e1] +1||1 ;
            })
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