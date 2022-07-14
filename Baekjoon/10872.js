const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();

let result = 1;

for (let i = 1; i <= input * 1; i++) {
    result *= i;
}

console.log(result);