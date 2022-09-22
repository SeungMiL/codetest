const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

let a = input.sort((a,b) => parseFloat(a) - parseFloat(b));

console.log(a.join('\n'))