const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let a = input[0].split(' ');
let b = a[1];

let score = input[1].split(' ');
score.sort((a,b) => b-a);

console.log(parseInt(score[b-1]))