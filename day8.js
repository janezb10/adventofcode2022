const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day8_input.txt', 'utf8')
        .split(/\r?\n/)
        .map(e=> e.split("").map(w=>w={h:+w,s:false}));
    } catch (err) {
        console.log(err);
    }
}());

for(i=0;i<inp.length;i++){
    let maxIzLeve = inp[i][0].h;
    inp[i][0].s = true;
    let maxIzZgoraj = inp[0][i].h;
    inp[0][i].s = true;
    for(l=0;l<inp[0].length;l++){
        if(inp[i][l].h > maxIzLeve) {
            inp[i][l].s = true;
            maxIzLeve = inp[i][l].h;
        }
        if(inp[l][i].h > maxIzZgoraj) {
            inp[l][i].s = true;
            maxIzZgoraj = inp[l][i].h;
        }
    }
}

for(i=inp.length-1;i>=0;i--){
    let maxIzDesne = inp[i][inp.length-1].h;
    inp[i][inp.length-1].s = true;
    let maxIzSpodaj = inp[inp.length-1][i].h;
    inp[inp.length-1][i].s = true;
    for(l=inp.length-1;l>=0;l--){
        if(inp[i][l].h > maxIzDesne) {
            inp[i][l].s = true;
            maxIzDesne = inp[i][l].h;

        }
        if(inp[l][i].h > maxIzSpodaj) {
            inp[l][i].s = true;
            maxIzSpodaj = inp[l][i].h;
        }
    }
}
const result = inp.flat(2).map(e=>e.s).filter(v=> v== true).length;
console.log(result);