const solution = (str) => {
  let answer = '';
  let cnt = 1;
  str = str + ' ';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
};

const str = 'KKHSSSSSSSE';
solution(str);
