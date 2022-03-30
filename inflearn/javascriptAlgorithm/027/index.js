const solution = (str) => {
  let answer = 0;
  answer = parseInt(str.replace(/[^0-9]/g, ''));

  return answer;
};

const str = 'g0en2T0s8eSoft';
solution(str);
