const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");


let arr = [1,1,2,2,2,8];
let answer = input.map((x,y) => arr[y] - x);

console.log(...answer);

