let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = +input.shift()

for (let i = 0; i < t; i ++) {
  let num = +input.shift();
  let coins = input.shift().toString().split(' ').map((v) => +v);
  let won = +input.shift();
  
  // 메모이제이션으로 DP 배열 생성 최종 금액 won을 수용할 수 있도록, won+1만큼
  let dp = Array.from({length: won + 1}, () => 0);
  
  // dp[0] 1로 세팅
  dp[0] = 1
  
  
  // 인덱스 k를 각 동전의 값을 시작으로 won까지 순회하며, dp[k] 누적
  for (let j = 0; j < num; j++) {
      for (let k = coins[j]; k <= won; k++) {
          dp[k] += dp[k - coins[j]];
      }
  }
  
  // 맨 마지막에 누적된 횟수 출력
  console.log(dp[won]);
}
