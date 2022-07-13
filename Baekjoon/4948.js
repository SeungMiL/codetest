const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

for(let i = 0; i < input.length; i++) {
    let input1 = Number(input[i]);
    let input2 = input1 * 2;

    let prime = Array(input2 + 1).fill(true);
    prime[0] = prime[1] = false;

    for(let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
        if(prime[i]) {
            let m = 2;
            while(i * m <= input2) {
                prime[i * m] = false;
                m++
            };
        }
    }

    let result = [];

    for(let i = input1 + 1; i <= input2; i++) {
        if(prime[i]) {
            result.push(i)
        }
    }
    console.log(result.length)
};