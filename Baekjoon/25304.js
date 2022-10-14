const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let total = parseInt(input.shift());
let len = parseInt(input.shift());
let sum = 0;
for(let i = 0; i < len; i++) {
  let money = parseInt(input[i].split(' ')[0]);
  let num = parseInt(input[i].split(' ')[1]);

  sum += money * num;
};

sum == total ? console.log('Yes') : console.log('No');

