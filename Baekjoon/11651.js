const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let len = Number(input.shift());
let input2 = input.map(x => x.split(' ').map(y =>  +y));

let answer = input2.sort((a,b) => {
    if(a[1] > b[1]) {
        return 1
    } else if(a[1] < b[1]) {
        return -1
    } else {
      return a[0] - b[0]
    }
})

console.log(answer.map(x => x.join(' ')).join('\n'))