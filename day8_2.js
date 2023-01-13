const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day8_input.txt', 'utf8')
        .split(/\r?\n/)
        .map(e=> e.split("").map(w=>w={h:+w}));
    } catch (err) {
        console.log(err);
    }
}());

for(i=0;i<inp.length;i++){
    for(l=0;l<inp.length;l++){
        let drevo = inp[i][l];
        //console.log(drevo)

        //na Levo
        let naLevo = 0;
        for(a=l-1;a>=0;a--){
            naLevo++;
            if(inp[i][a].h >= drevo.h) break;
        }
        drevo.naLevo = naLevo;

        // navzgor
        let navzgor = 0;
        for(a=i-1;a>=0;a--){
            navzgor++;
            if(inp[a][l].h >= drevo.h) break;
        }
        drevo.navzgor = navzgor;

        // na Desno
        let naDesno = 0;
        for(a=l+1;a<inp.length; a++){
            naDesno++;
            if(inp[i][a].h >= drevo.h) break;
        }
        drevo.naDesno = naDesno;

        // navzdol
        let navzdol = 0;
        for(a=i+1;a<inp.length;a++){
            navzdol++;
            if(inp[a][l].h >= drevo.h) break;
        }
        drevo.navzdol = navzdol;
    }
}
const halfResult = inp.flat().map(e => e.naDesno * e.naLevo * e.navzdol * e.navzgor)
const result = Math.max(...halfResult);

console.log(result)