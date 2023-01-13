const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day10_input.txt', 'utf8')
        .split(/\r?\n/)
        .map(e=> e.split(" "));
    } catch (err) {
        console.log(err);
    }
}());

let cikel = 0;
let x = 1;
let display =[[],[],[],[],[],[],[]];
let line = 0;

for(i=0;i<inp.length;i++) {
    let command = inp[i][0];
    if(command == "noop"){
        cikel++;
        drawOrSomething(cikel, x, line);
        if(cikel == 40){
            cikel = 0;
            line++;
        } 
    }
    if(command == "addx") {
        let addxValue = +inp[i][1];
        let l = 0;
        while(l<2) {
            cikel++;
            if(l==1) {
                x += addxValue;
            }
            drawOrSomething(cikel, x, line);
            if(cikel == 40){
                cikel = 0;
                line++;
            } 
            l++;
        }
    }
}
// let result = signalStrength.reduce((a, b) => a+b, 0)
// console.log(result)

const result = display.map(e => e.join());
console.log(result)



function drawOrSomething(cikel, x, line) {
    
    if(cikel == x || cikel == x-1 || cikel == x+1) {
        display[line].push("#")
    } else {
        display[line].push(".")
    }
}

