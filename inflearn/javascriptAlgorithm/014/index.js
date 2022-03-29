const solution = (arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
};
const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
solution(arr);

