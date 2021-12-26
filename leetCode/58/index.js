/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const strSplit = s.trim().split(' ');
  const lastWordSplit = strSplit[strSplit.length - 1].split('');

  return lastWordSplit.length;
};
