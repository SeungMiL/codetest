const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

const isPrimeNumber = Array(N + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (isPrimeNumber[i]) {
    let m = 2;
    while (i * m <= N) {
      isPrimeNumber[i * m] = false;
      m++;
    }
  }
}
const results = [];
for (let i = M; i <= N; i++) {
  if (isPrimeNumber[i]) {
    results.push(i);
  }
}

console.log(results.join("\n"))
