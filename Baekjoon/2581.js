const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let M = Number(input[0]); /* 60 */
let N = Number(input[1]); /* 100 */

let arr = [];

for(let i = M; i <= N; i++) {
    let count = 0;

    for(let j = 1; j <= i; j++) {
        if((i % j) == 0) {
            count++;
        }        
    }
    
    if(count == 2) {
        arr.push(i);
    }
}

if(arr.length !== 0) {
    let sum = arr.reduce((x, y) => x + y);
    let min = arr[0];

    console.log(sum);
    console.log(min)
} else {
    console.log(-1);
}