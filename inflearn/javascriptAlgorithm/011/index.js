const solution = (str, s) => {
  let answer = 0;
  for (x of str) {
    if (x === s) {
      answer++;
    }
  }
  return answer;
};
const str = 'COMPUTERPROGRAMMING';
solution(str, 'R');
