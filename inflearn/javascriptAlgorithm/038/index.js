const solution = (n, m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
};
const arr = [1, 3, 1, 2, 3];
solution(5, 5, arr);

