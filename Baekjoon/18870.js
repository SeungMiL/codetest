const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let a = [...new Set(input[1].split(' ').map(x => +x).sort((a,b) => a-b))];
let b = {};

a.forEach((x,y) => {
    b[x] = y;
});

let answer = input[1].split(' ').map(x => b[x]);

console.log(answer.join(' '));