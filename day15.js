const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day15_input.txt', 'utf8')
            .split("\n")
            .map(s => {
                let a = s.split(" ");
                const sensor = {
                    x: +a[2].substring(2, a[2].length-1),
                    y: +a[3].substring(2, a[3].length-1)
                };
                const closestBeacon = {
                    x: +a[8].substring(2, a[8].length-1),
                    y: +a[9].substring(2)
                }
                return [sensor, closestBeacon];
            })

    } catch (err) {
        console.log(err);
    }
}());
const row = 2000000; //y
let cantBe = [];
let beaconsinRow = [];

for(i=0;i<inp.length;i++) {
    const s = inp[i][0];
    const b = inp[i][1];
    if(b.y == row) {
        beaconsinRow.push(b.x);
    }
    let dis = izmeriDolzino(s, b);

    for(t=s.x;izmeriDolzino(s, {x:t, y: row}) <= dis; t++) {
        cantBe.push(t);
    }
    for(t=s.x;izmeriDolzino(s, {x:t, y: row}) <= dis; t--) {
        cantBe.push(t);
    }
}
cantBe = [...new Set(cantBe)] .sort((a,b) => a -b);
beaconsinRow = [...new Set(beaconsinRow)];

for(i=0;i<beaconsinRow.length;i++) {
    index = cantBe.indexOf(beaconsinRow[i]);
    cantBe.splice(index, 1);
}

const result = cantBe.length;
console.log(result)



function izmeriDolzino(objA, objB) {
    return Math.abs(objA.x - objB.x) + Math.abs(objA.y - objB.y)
}
