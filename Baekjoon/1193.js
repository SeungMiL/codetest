const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = parseInt(input);
let val = 1;

while(true) {
    num -= val;
    if(num <= 0) {
        num += val;
        break;
    }
    val++;
}

if(val % 2 === 1) {
    console.log(`${val - (num -1)}/${1 + (num - 1)}`);
} else {
    console.log(`${1 + (num - 1)}/${val - (num - 1)}`);
}