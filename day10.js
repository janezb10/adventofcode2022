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

let cikel = 1;
let x = 1;
let signalStrength = [];

for(i=0;i<inp.length;i++) {
    let command = inp[i][0];
    if(command == "noop"){
        cikel++;
        checkForSignalstrength(cikel,x)
    }
    if(command == "addx") {
        let addxValue = +inp[i][1];
        let l = 0;
        while(l<2) {
            cikel++;
            if(l==1) {
                x += addxValue;
            }
            checkForSignalstrength(cikel, x);
            l++;
        }
    }
}
let result = signalStrength.reduce((a, b) => a+b, 0)
console.log(result)

function checkForSignalstrength(cikel, x) {
    switch (cikel){
        case 20:
            signalStrength.push(cikel * x);
            break;
            case 60:
                signalStrength.push(cikel * x);
                break;
                case 100:
                    signalStrength.push(cikel * x);
                    break;
                    case 140:
                        signalStrength.push(cikel * x);
                        break;
                        case 180:
                            signalStrength.push(cikel * x);
                            break;
                            case 220:
                                signalStrength.push(cikel * x);
                                break;
                            }
                        }