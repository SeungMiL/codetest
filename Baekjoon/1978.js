const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const sort = (n) => {
    if(n == 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

let b = input[1].split(' ');

console.log(b.filter(x => sort(x)).length);