const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let a = Number(input);
let count = 0;

while(true) {
    if(a % 5 === 0) {
        console.log(a / 5 + count);
        break;
    }

    if (0 > a) {
        console.log(-1);
        break;
    }

    count++;
    a -= 3;
}