const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let a = Number(input);
let b = 2;

while(a > 1) {
    let c = a % b;
    if(c == 0) {
        console.log(b);
        a /= b;
    } else {
        b++;
    }
}
