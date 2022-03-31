const solution = (n, k, arr) => {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
};
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
solution(10, 3, arr);

