const solution = (a, b, c) => {
  let answer = 'YES',
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) return (answer = 'NO');
  return answer;
};

solution(13, 33, 17);


