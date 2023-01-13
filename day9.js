const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day9_input.txt', 'utf8')
        .split(/\r?\n/)
        .map(e=> e.split(" "));
    } catch (err) {
        console.log(err);
    }
}());

//kje je tail bil
let kjtb = new Set;
kjtb.add("0|0");

let kjt="0|0";
let kjh="0|0";

for(i=0;i<inp.length;i++) {
    let inpKam = inp[i][0];
    let inpKolk = inp[i][1];

    let [xt, yt] = decode(kjt)
    let [xh, yh] = decode(kjh);

    for(l=0;l<inpKolk;l++){
        if(inpKam == "R") {
            xh++;
        }
        if(inpKam == "L") {
            xh--;
        }
        if(inpKam == "U") {
            yh++;
        }
        if(inpKam == "D") {
            yh--;
        }
        [xt, yt, xh, yh] = tailToHead(xt,yt,xh, yh)

        kjt=encode(xt,yt);
        kjh=encode(xh,yh);

        kjtb.add(encode(xt,yt));
    }
    // console.log(inpKolk)
}

const result = kjtb.size;
console.log(result)


function tailToHead(xt,yt,xh,yh){
    if(xh > xt && xh > xt+1) {
        if(yh == yt) {
            xt++;
        }
        if(yh > yt) {
            xt++;
            yt++;
        }
        if(yh < yt) {
            xt++;
            yt--;
        }
        return [xt,yt,xh,yh];

    }
    if(xh < xt && xh < xt-1) {
        if(yh == yt) {
            xt--;
        }
        if(yh > yt) {
            xt--;
            yt++;
        }
        if(yh < yt) {
            xt--;
            yt--;
        }
        return [xt,yt,xh,yh];
    }
    if(yh > yt && yh > yt+1) {
        if(xh == xt) {
            yt++;
        }
        if(xh > xt) {
            yt++;
            xt++;
        }
        if(xh < xt) {
            yt++;
            xt--;
        }
        return [xt,yt,xh,yh];
    }
    if(yh < yt && yh < yt-1) {
        if(xh == xt) {
            yt--;
        }
        if(xh > xt) {
            yt--;
            xt++;
        }
        if(xh < xt) {
            yt--;
            xt--;
        }
        return [xt,yt,xh,yh];
    }
    return [xt,yt,xh,yh];
}

function decode(kjeString) {
    return kjeString.split("|").map(e=> +e);
}
function encode(x,y) {
    return [x,y].join("|");
}
