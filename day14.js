const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day14_input.txt', 'utf8')
            .split("\n")
            .map(e => {
                return e.split(" -> ")
                    .map( i => {
                        return i.split(",").map(m => +m);
                    })
                });
    } catch (err) {
        console.log(err);
    }
}());

let grid = [];
let biggest = inp[0][0][1];

for(n=0;n<inp.length;n++) {
    for(m=0;m<inp[n].length-1;m++){
        makeLines(inp[n][m], inp[n][m+1])
    }
}
grid = [...new Set(grid)];

let result=0;
let sandPiece = [500,0];

while(sandPiece[1]<=biggest ){
    let sD = JSON.stringify([sandPiece[0],sandPiece[1]+1]);
    if(!grid.includes(sD)){
        sandPiece = [sandPiece[0],sandPiece[1]+1];
        continue;
    }
    let sL = JSON.stringify([sandPiece[0]-1,sandPiece[1]+1]);
    if(!grid.includes(sL)){
        sandPiece = [sandPiece[0]-1,sandPiece[1]+1];
        continue;
    }
    let sR = JSON.stringify([sandPiece[0]+1,sandPiece[1]+1])
    if(!grid.includes(sR)) {
        sandPiece = [sandPiece[0]+1,sandPiece[1]+1];
        continue;
    }
    grid.push(`[${sandPiece[0]},${sandPiece[1]}]`);
    result++;
    sandPiece = [500,0];
}
console.log(result);

function makeLines(a, b) {
    if(a[0] == b[0]){
        if(a[1] < b[1]){
            if(b[1]>biggest) biggest = b[1];
            for(i=a[1]; i<=b[1]; i++){
                grid.push(`[${a[0]},${i}]`);
            }
        }
        else {
            if(a[1]>biggest) biggest = a[1];
            for(i=a[1]; i>=b[1]; i--){
                grid.push(`[${a[0]},${i}]`);
            }
        }
    }
    else {
        if(a[1]>biggest) biggest = a[1];
        if(b[1]>biggest) biggest = b[1];
        if(a[0] < b[0]){
            for(i=a[0]; i<=b[0]; i++) {
                grid.push(`[${i},${a[1]}]`);

            }
        }
        else {
            for(i=a[0]; i>=b[0]; i--) {
                grid.push(`[${i},${a[1]}]`);
            }
        }
    }
}

