const fs = require('fs');
let inp;

(async function readFile() {
    try {
        inp = fs.readFileSync('./day6_input.txt', 'utf8');
    } catch (err) {
        console.log(err);
    }
}());

// For part 1 set distinctCharacters variable to 4.
// For part 2 set distinctCharacters variable to 14.
const distinctCharacters = 14;

for(i=0;i<inp.length - distinctCharacters; i++) {
    let set = new Set();
    for(l=0;l<distinctCharacters;l++) {
        set.add(inp[i+l]);
    }
    if(set.size == distinctCharacters) {
        const answer = i + distinctCharacters;
        return console.log(answer);
    }
}