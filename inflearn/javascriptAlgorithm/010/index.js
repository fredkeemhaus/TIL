const solution = (str) => {
  let answer = str;
  answer = answer.replace(/A/g, '#');
  return answer;
};

const str = 'BANANA';
solution(str);

