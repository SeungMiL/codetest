const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let a = [...new Set(input.sort((a,b) => a > b ? 1 : (a < b ? -1 : 0)).sort((a,b) => a.length - b.length))];
a.forEach(x => console.log(x))