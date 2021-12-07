/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  let sumArg = '';
  const splitArg = x.toString().split('');

  splitArg.reverse();
  splitArg.map((v) => {
    sumArg += v;
  });

  if (parseInt(sumArg) === x) {
    return true;
  } else {
    return false;
  }
};

