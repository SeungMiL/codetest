const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => +x);
input.shift();

let sort = [...new Set(input.sort((a,b) => a-b))];

sort.forEach(x => console.log(x))
