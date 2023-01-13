const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day5_input.txt', 'utf8').split(/\r?\n/);
    } catch (err) {
        console.log(err);
    }
}());

let input= {
    1: "RGJBTVZ",
    2: "JRVL",
    3: "SQF",
    4: "ZHNLFVQG",
    5: "RQTJCSMW",
    6: "SWTCHF",
    7: "DZCVFNJ",
    8: "LGZDWRFQ",
    9: "JBWVP"
};

function fromHereToThere(fromHere, toThere, howMany) {
    input[toThere] += input[fromHere].slice(-howMany);
    input[fromHere] = input[fromHere].slice(0, -howMany);
}

for(i=0;i<inp.length;i++){
    inp[i] = inp[i].split(" ");
    howMany = +inp[i][1];
    fromHere = +inp[i][3];
    toThere = +inp[i][5];

    fromHereToThere(fromHere, toThere, howMany);
}

console.log(input) 
