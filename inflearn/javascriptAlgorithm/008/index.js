const solution = (day, arr) => {
  let answer = 0;

  for (x of arr) {
    if (x % 10 === day) answer++;
  }

  return answer;
};

const arr = [25, 23, 11, 47, 53, 17, 33];
solution(3, arr);
