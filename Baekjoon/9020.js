const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(x => +x);
input.shift();

let max = Math.max(...input);
let answer = [];
let prime = new Array(max + 1).fill(true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= max + 1; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= max + 1; j += i) {
      prime[j] = false;
    }
  }
}

input.forEach(v => {
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`)
      break;
    }
  }
})

console.log(answer.join('\n'))