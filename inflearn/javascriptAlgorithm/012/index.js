const solution = (s) => {
  let answer = 0;
  for (let x of s) {
    // let num = x.charCodeAt(); // 대문자 ASCII 코드는 65 ~ 90 = 26개, 소문자는 97 ~ 122 = 26개
    // if (num > 65 && num <= 90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
};
const s = 'KoreaTimeGood';
solution(s);
