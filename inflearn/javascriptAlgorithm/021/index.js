const solution = (arr) => {
  let answer = 0,
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
};
const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr);

