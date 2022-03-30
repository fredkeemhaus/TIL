const solution = (str) => {
  let answer = 'YES';
  let len = str.length;
  str = str.toLowerCase();

  // reverse method
  // if (str !== str.split('').reverse().join('')) {
  //   return 'NO';
  // }

  // reverse 안쓰고
  for (let i = 0; i < Math.floor(len); i++) {
    if (str[i] !== str[len - i - 1]) answer = 'NO';
  }

  return answer;
};

const str = 'gooG';
solution(str);
