const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day11_input.txt', 'utf8')
        .split(/\r?\n\n/)
        .map(e => e.split(/\r?\n/)
            .map(o => o.trim())
        )
    } catch (err) {
        console.log(err);
    }
}());


let monkeysItems = inp
    .map(e=>e[1]
        .replaceAll(",", "")
        .split(" ")
        .splice(2)
    );
let operations = inp
    .map(e=>e[2]
        .split(" ")
        .splice(4)
    );
let test = inp
    .map(e=>e[3]
        .split(" ")
        .splice(3)
    ).flat();

let testTrue = inp
    .map(e=>+e[4]
        .split(" ")
        .splice(5)
    )

let testFalse = inp
    .map(e=>+e[5]
        .split(" ")
        .splice(5)
    )

let inspectionTimes = inp.map(e=> 0);

for(i=0;i<20;i++){
    for(l=0;l<inp.length;l++) {
        for(e=0;e<monkeysItems[l].length;e++) {
            let item = +monkeysItems[l][e];
            let operation = operations[l];
            let operationNumber;
            if(operation[1] == "old"){
                operationNumber = +item;
            } else {
                operationNumber = +operation[1];
            }
            if(operation[0] == "+") {
                item = item + operationNumber;
            } else if(operation[0] == "*") {
                item = item * operationNumber;
            }
            item = Math.floor(item / 3);
            if(item % test[l] == 0){
                monkeysItems[+testTrue[l]].push(item)
            } else {
                monkeysItems[+testFalse[l]].push(item)
            }
            inspectionTimes[l]++;
        }
        monkeysItems[l] = [];
    }

}
inspectionTimes = inspectionTimes.sort((a,b)=> b-a)
console.log(inspectionTimes)


let result = inspectionTimes[0] * inspectionTimes[1];
console.log(result)