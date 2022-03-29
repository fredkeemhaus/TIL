const solution = (s) => {
  // k가 있을 때, ++ 하기
  let answer = 0;
  let pos = s.indexOf('k');

  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }

  // 중복 제거 (원래 문제)
  // let answer = '';

  // for (let i = 0; i < s.length; i++) {
  //   if (i === s.indexOf(s[i])) {
  //     answer += s[i];
  //   }
  // }

  return answer;
};

const str = 'ksekkset';
solution(str);
