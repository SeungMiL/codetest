const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = Number(input.shift());

for(let i = 0; i < a; i++) {
    let k = +input.shift();
    let n = +input.shift();

    let home = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    for(let i = 1; i <= n; i++) {
        home[0][i] = i;
    };

    for(let i = 1; i <= k; i++) {
        for(let j = 1; j <= n; j++) {
            home[i][j] = home[i - 1][j] + home[i][j-1];
        }
    }

    console.log(home[k][n]);
}
