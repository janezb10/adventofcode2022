const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day12_input.txt', 'utf8')
        .split(/\r?\n/)
        .map(e=> e.split("")
            .map(o => o={v:o, obiskano:false, kolikoDalec:false})
        )
    } catch (err) {
        console.log(err);
    }
}());
let start = false;
let konec = false;

for(i=0;i<inp.length;i++) {
    for(l=0;l<inp[i].length;l++){
        if(inp[i][l].v == "S") {
            start = [i,l];
            inp[i][l].v = "a";
        }else if(inp[i][l].v == "E"){
            konec = [i,l];
            inp[i][l].v = "z";
        }
        inp[i][l].v = inp[i][l].v.charCodeAt(0);
    }
}

const q = [start];
inp[start[0]][start[1]].obiskano = true;
inp[start[0]][start[1]].kolikoDalec = 0;

while(!(q[0][0] == konec[0] && q[0][1] == konec[1])) {
    //element Koordinate
    let eK = q.shift();
    let eKX = eK[0];
    let eKY = eK[1];
    //element
    let e = inp[eKX][eKY];
    //novi Element Koordinate in novi element in x in y
    let nE;
    let nEK;
    let nEKX;
    let nEKY;

    //preverjanje dodajanje v queue
    if(eKX-1 >= 0){
        nEK = [eKX-1,eKY];
        nEKX = nEK[0];
        nEKY = nEK[1];
        nE = inp[nEKX][nEKY];

        if(Math.abs(e.v - nE.v) <= 1 || nE.v < e.v) {
            if(nE.obiskano == false){
                nE.obiskano = true;
                nE.kolikoDalec = e.kolikoDalec +1;
                q.push([nEKX,nEKY]);
            }
        }
    }
    if(eKY-1 >= 0) {
        nEK = [eKX, eKY-1]
        nEKX = nEK[0];
        nEKY = nEK[1];
        nE = inp[nEKX][nEKY];
        
        if(Math.abs(e.v - nE.v) <= 1 || nE.v < e.v) {
            if(nE.obiskano == false){
                nE.obiskano = true;
                nE.kolikoDalec = e.kolikoDalec +1;
                q.push([nEKX,nEKY]);
            }
        }
    }
    if(eKX+1 < inp.length){
        nEK = [eKX+1, eKY];
        nEKX = nEK[0];
        nEKY = nEK[1];
        nE = inp[nEKX][nEKY];
        
        if(Math.abs(e.v - nE.v) <= 1 || nE.v < e.v) {
            if(nE.obiskano == false){
                nE.obiskano = true;
                nE.kolikoDalec = e.kolikoDalec +1;
                q.push([nEKX,nEKY]);
            }
        }
    }
    if(eKY+1 < inp[0].length) {
        nEK = [eKX, eKY+1];
        nEKX = nEK[0];
        nEKY = nEK[1];
        nE = inp[nEKX][nEKY];

        if(Math.abs(e.v - nE.v) <= 1 || nE.v < e.v) {
            if(nE.obiskano == false){
                nE.obiskano = true;
                nE.kolikoDalec = e.kolikoDalec +1;
                q.push([nEKX,nEKY]);
            }
        }
    }

    // console.log(q)
}
console.log("result: " + inp[q[0][0]][q[0][1]].kolikoDalec)
