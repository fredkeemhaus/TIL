const solution = (n, m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
};
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
solution(8, 6, arr);

