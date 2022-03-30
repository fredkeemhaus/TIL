const solution = (arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (x of arr) {
    let sum = 0,
      tmp = x;
    // reduce
    sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) answer = x;
    }
  }

  return answer;
};

const arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);

