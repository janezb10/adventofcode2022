const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day7_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

const command = /^\$/;
const bigO = {"/":{}};
let currentLocation = [];
let sum = [];
let sum2 = [];
let i=0;

while(i<inp.length){
    let vrstica = inp[i].split(" ");

    if(command.test(inp[i])){
        if(vrstica[1] == "cd"){
            if(vrstica[2] == ".."){
                currentLocation.pop();
            }else if(vrstica[2] == "/"){
                currentLocation = ["/"];
            } else {
                currentLocation.push(vrstica[2]);
            }
        }
        if(vrstica[1] == "ls") {
            while(i+1<inp.length && !command.test(inp[i+1])) {
                i++;
                const vrstica = inp[i].split(" ");
                const currenObject = objFromArrPath(currentLocation,bigO);
                
                if(vrstica[0] == "dir") {
                    currenObject[vrstica[1]] = {};
                } else {
                    currenObject[vrstica[1]] = +vrstica[0];
                }
            }
        }
    }
    i++;
}
iterate(bigO);
const result1 = sum.reduce((ac, cV)=> ac + cV, 0);
const spaceNeeded = 30000000 - (70000000 - summer(bigO));
let result2 = sum2.filter(e => e>spaceNeeded).sort((a,b) => a-b);
result2 = result2[0];

console.log("Part one:" + result1);
console.log("Part two:" + result2);



function iterate(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
            if(summer(obj[key]) <= 100000) sum.push(summer(obj[key]));
            sum2.push(summer(obj[key]))
        }
    })
}

function objFromArrPath(arrayPath, Object) {
    let ref = Object;
    for(e=0;e<arrayPath.length;e++) {
        const key = arrayPath[e];
        ref = ref[key];
    }
    return ref;
}

function summer(object1) {
    let sum = 0;
    for (const value of Object.values(object1)) {
        if (typeof value === "number") {
        sum += value;
        }
        if (typeof value === "object") {
        sum += summer(value);
        }
    }
    return sum;
};

//Janez Brenčič