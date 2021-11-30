const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = input.shift();
const arr = input.map((v) => v.split(' ').map((v) => +v));

let answer = 0;

// 끝나는 시간 기준으로 정렬
arr.sort((a, b) => {
  // 시작과 끝 시간이 같은 경우, 조건 추가
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let et = 0;

for (let x of arr) {
  if (x[0] >= et) {
    answer++;
    et = x[1];
  }
}

console.log(answer);
