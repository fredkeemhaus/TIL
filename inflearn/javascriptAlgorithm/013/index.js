const solution = (s) => {
  let answer = '';
  for (let x of s) {
    // ASCII code
    // let num = x.charCodeAt();
    // if (num > 97 && num <= 122) answer += String.fromCharCode(num - 32);
    // else answer += x;

    // String
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
};
const s = 'ItisTimeToStudy';
solution(s);
