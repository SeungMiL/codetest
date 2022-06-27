const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
let result = input.replace(regex, ' ');

console.log(result.length)