const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = input[0];
let b = input[1];
let c = input[2];

let d = c - b;
let count = Math.floor(a / d) + 1;

console.log(d <= 0 ? -1 : count)