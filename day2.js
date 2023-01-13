const fs = require('fs');
let arr;

(async function readFile() {
    try {
        arr = fs.readFileSync('./day2_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

arr = arr.map(e => e.split(" "));

let tocke = 0;

let dic= {
    X:1,
    Y:2,
    Z:3
};
/* 
for(i=0;i<arr.length;i++){
    if(arr[i][0]=="A"){
        if(arr[i][1]=="Y") tocke +=6;
        if(arr[i][1]=="X") tocke +=3;
    }
    if(arr[i][0]=="B"){
        if(arr[i][1]=="Z") tocke +=6;
        if(arr[i][1]=="Y") tocke +=3;
    }
    if(arr[i][0]=="C"){
        if(arr[i][1]=="X") tocke +=6;
        if(arr[i][1]=="Z") tocke +=3;
    }
    tocke += dic[arr[i][1]];
} */

let dic2 = {

};
let a = "";

for(i=0;i<arr.length;i++) {
    if(arr[i][1]=="X"){
        if(arr[i][0] == "A") tocke += 3;
        if(arr[i][0] == "B") tocke += 1;
        if(arr[i][0] == "C") tocke += 2;

    }
    if(arr[i][1]=="Y"){
        tocke += 3;

        if(arr[i][0] == "A") tocke += 1;
        if(arr[i][0] == "B") tocke += 2;
        if(arr[i][0] == "C") tocke += 3;
    }
    if(arr[i][1]=="Z"){
        tocke += 6;
        if(arr[i][0] == "A") tocke += 2;
        if(arr[i][0] == "B") tocke += 3;
        if(arr[i][0] == "C") tocke += 1;
    }
}


console.log(tocke);
