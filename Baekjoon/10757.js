const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let a = BigInt(input[0]);
let b = BigInt(input[1]);

console.log(String(a + b))