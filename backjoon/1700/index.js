let fs = `2 7
2 3 2 3 1 2 7`;

let input = fs.toString().trim().split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((x) => Number(x));
const electicalGoods = input
  .shift()
  .split(" ")
  .map((x) => Number(x));
const plugin = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  if (plugin.indexOf(electicalGoods[i]) !== -1) continue;

  if (plugin.length < N) {
    plugin.push(electicalGoods[i]);
    continue;
  }

  answer += 1;
  let change_idx = 0;
  let last_idx = 0;

  for (let j = 0; j < N; j++) {
    // 플러그 구의 개수
    let tmp_idx = -1;
    for (let k = i + 1; k < K; k++) {
      // 지금까지 진행한 기기들의 다음부터
      if (electicalGoods[k] === plugin[j]) {
        // 플러그에 기기들이 꽂혀 있는지 탐색
        tmp_idx = k;
        break;
      }
    }
    if (tmp_idx === -1) {
      // 다시 사용될 일 없는 기기라면 바로 뽑는다.
      change_idx = j;
      break;
    } else {
      // 나중에 다시 사용되는 기기
      if (last_idx < tmp_idx) {
        // 가장 마지막 사용된 인덱스 보다 현재 발견한 인덱스가 더 크다면 변경.
        last_idx = tmp_idx;
        change_idx = j;
      }
    }
  }
  plugin[change_idx] = electicalGoods[i];
}

console.log(answer);
