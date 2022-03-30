const solution = (str, t) => {
  let answer = [];
  let p = 1000;

  for (let x of str) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      p = 0;
      answer[i] = p;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
};

const str = 'teachermode';
solution(str, 'e');
