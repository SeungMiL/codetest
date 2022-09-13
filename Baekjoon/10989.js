const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => +x);
input.shift();
// console.log(input)

for(let i=0; i < input.length-1; i++) {
    let idx = i;
    for(let j = i+1; j < input.length; j++) {
        if(input[idx] > input[j]) {
            idx=j;
        }
    }
    [input[i], input[idx]] = [input[idx], input[i]]
}

console.log(input.join('\n'))