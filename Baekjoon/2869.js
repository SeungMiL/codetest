const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let v = parseInt(input[2]);

console.log(Math.ceil((v - b)/(a - b)));