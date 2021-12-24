var strStr = function (haystack, needle) {
  let answer = 0;
  if ((haystack === '' && needle === '') || needle === '') return 0;
  if (haystack === '') return -1;

  const split_check = haystack.split(needle);

  if (split_check[0] === haystack) {
    answer = -1;
  } else if (split_check[0] !== haystack) {
    answer = split_check[0].length;
  }

  return answer;
};
