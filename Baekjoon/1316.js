const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let wordLength = Number(input[0]);
let count = 0;

for(let i = 1; i <= wordLength; i++) {
    let word = input[i];
    let wordLetter = [];
    let isWord = true;
    for(let j = 0; j <= word.length; j++) {
       if(wordLetter.indexOf(word[j]) === -1) {
        wordLetter.push(word[j]);
       } else {
        if(wordLetter.indexOf(word[j]) !== wordLetter.length - 1) {
            isWord = false;

            break
        }
       }
    }
    if (isWord) {
        count += 1;
    }
}

// console.log(count)