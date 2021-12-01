const fs = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`;

let input = fs.toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
input = input
  .map((el) => el.replace(/\r/, ''), '')
  .map((el) => el.split(' ').map(Number));

const n = input.shift()[0];
const INF = Number.MAX_SAFE_INTEGER;
const dp = new Array(n).fill().map(() => new Array(2 ** n - 1).fill(INF));

function dfs(city, visited) {
  if (visited === 2 ** n - 1) {
    if (input[city][0] === 0) return INF;
    return input[city][0];
  }

  if (dp[city][visited] !== INF) return dp[city][visited];

  for (let i = 0; i < n; i++) {
    if (input[city][i] && (visited & (1 << i)) === 0) {
      dp[city][visited] = Math.min(
        dp[city][visited],
        dfs(i, visited | (1 << i)) + input[city][i]
      );
    }
  }
  return dp[city][visited];
}

console.log(dfs(0, 1));
