/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = (n) => {
  let res = [0];
  let len = 1;

  for (let i = 0; i < n; i++) {
    len = res.length;
    for (let j = len - 1; j >= 0; j--) {
      res.push(res[j] + len);
    }
  }

  return res;
};
