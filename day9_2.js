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
let vrv=["0|0","0|0","0|0","0|0","0|0","0|0","0|0","0|0","0|0","0|0"];

for(i=0;i<inp.length;i++) {
    let inpKam = inp[i][0];
    let inpKolk = inp[i][1];
    let head = vrv[0]; 
    let [xh, yh] = decode(head);

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
        vrv[0]= encode(xh,yh)

        for(o=1;o<vrv.length;o++) {
            let prejsnji = vrv[o-1];
            prejsnji = prejsnji.split("|").map(e=> +e);
            let prejsnjiX = prejsnji[0];
            let prejsnjiY = prejsnji[1];
            let zdajsnji = vrv[o];
            zdajsnji = zdajsnji.split("|").map(e=> +e);
            let zdajsnjiX = zdajsnji[0];
            let zdajsnjiY = zdajsnji[1];

            [zdajsnjiX, zdajsnjiY] = tailToHead(zdajsnjiX,zdajsnjiY,prejsnjiX,prejsnjiY)
            
            vrv[o]= encode(zdajsnjiX,zdajsnjiY)
        }

        kjtb.add(vrv[9]);
    }
}

const result = kjtb.size;
console.log(result)


function tailToHead(xtt,ytt,xhh,yhh){
    if(xhh > xtt && xhh > xtt+1) {
        if(yhh == ytt) {
            xtt++;
        }
        if(yhh > ytt) {
            xtt++;
            ytt++;
        }
        if(yhh < ytt) {
            xtt++;
            ytt--;
        }
        return [xtt,ytt,xhh,yhh];

    }
    if(xhh < xtt && xhh < xtt-1) {
        if(yhh == ytt) {
            xtt--;
        }
        if(yhh > ytt) {
            xtt--;
            ytt++;
        }
        if(yhh < ytt) {
            xtt--;
            ytt--;
        }
        return [xtt,ytt,xhh,yhh];
    }
    if(yhh > ytt && yhh > ytt+1) {
        if(xhh == xtt) {
            ytt++;
        }
        if(xhh > xtt) {
            ytt++;
            xtt++;
        }
        if(xhh < xtt) {
            ytt++;
            xtt--;
        }
        return [xtt,ytt,xhh,yhh];
    }
    if(yhh < ytt && yhh < ytt-1) {
        if(xhh == xtt) {
            ytt--;
        }
        if(xhh > xtt) {
            ytt--;
            xtt++;
        }
        if(xhh < xtt) {
            ytt--;
            xtt--;
        }
        return [xtt,ytt,xhh,yhh];
    }
    return [xtt,ytt,xhh,yhh];
}

function decode(kjeString) {
    return kjeString.split("|").map(e=> +e);
}
function encode(x,y) {
    return [x,y].join("|");
}
