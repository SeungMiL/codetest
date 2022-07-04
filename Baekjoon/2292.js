const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let input1 = parseInt(input);
let range = 1, block = 1;

while (block < input1) {
    block += 6 * range;
    
    range++;
};

console.log(range)