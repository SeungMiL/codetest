const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = +input[0];


for(let i = 1; i <= a; i++) {
    let hwn = input[i].split(" ");

    let h = +hwn[0];
    let w = +hwn[1];
    let n = +hwn[2];

    let above = n % h;
    above = above === 0 ? h : above;

    let back = Math.ceil(n / h);
    back = back < 10 ? "0" + back : back
    
    console.log(`${above}${back}`);
}