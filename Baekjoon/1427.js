const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('').map(x => +x);

let answer = input.sort((a,b) => a-b).reverse().join('');
console.log(answer)
