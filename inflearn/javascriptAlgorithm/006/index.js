const solution = (arr) => {
  let answer,
    oddSum = 0,
    oddMin = Number.MAX_SAFE_INTEGER;
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) odd.push(arr[i]);
  }
  for (let i = 0; i < odd.length; i++) {
    oddSum = oddSum + odd[i];
    oddMin = Math.min(...odd);
  }

  console.log(oddSum, oddMin);

  return answer;
};

solution([12, 77, 38, 41, 53, 92, 85]);

