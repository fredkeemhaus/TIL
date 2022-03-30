const solution = (str) => {
  let answer = 'YES';
  let reg = /[^a-z]/g;
  str = str.toLowerCase().replace(reg, '');
  let len = str.length;

  // reverse method
  // if (str !== str.split('').reverse().join('')) return 'NO';

  // no reverse method
  for (let i = 0; i < Math.floor(len); i++) {
    if (str[i] !== str[len - i - 1]) return 'NO';
  }

  return answer;
};

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
solution(str);
