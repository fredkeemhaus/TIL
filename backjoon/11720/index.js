const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number = Number(input[0]);
const value = input[1].split('').map((v) => +v);

const answer = value.reduce((a, b) => a + b);
console.log(answer);
