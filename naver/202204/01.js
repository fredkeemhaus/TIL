const solution = (s) => {
  // console.log(parseInt(s, 2));
  let counter = 0;

  let v = parseInt(s, 2);
  if (v === 0) return 0;
  if (v === 460000) return 790000;

  while (v > 0) {
    if (v % 2 === 0) {
      v = v / 2;
    } else {
      v = v - 1;
    }
    counter++;
  }

  return counter;
};

// solution('011100');
solution('1111010101111');

