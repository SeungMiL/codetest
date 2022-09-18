const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(x => +x);
let answer = "";
let len = input.shift();
input.sort((a,b) => a-b);

let average = Math.round(input.reduce((a, b) => a+b, 0) / len);
let center = input[Math.floor(len/2)];
let map = new Map();
let max = 1;

for(let x of input) {
    if(map.has(x)) {
        max = Math.max(max, map.get(x) + 1);
        map.set(x, map.get(x) + 1)
    } else {
        map.set(x, 1);
    }
}

const maxArr = [];
for (let [key, val] of map) {
    if(val === max) maxArr.push(key);
}

let second = maxArr.length === 1 ? maxArr[0] : maxArr[1]

let range = input[len-1] - input[0];


answer += `${average}\n${center}\n${second}\n${range}`

console.log(answer)
