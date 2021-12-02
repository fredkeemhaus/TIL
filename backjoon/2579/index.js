let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = +input.shift();
let arr = input.map((v) => +v);

const dp = new Array(num).fill(0);

dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < num; i++) {
  dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}

console.log(dp[num - 1]);
;
