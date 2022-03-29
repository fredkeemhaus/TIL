const solution = (arr) => {
  let answer = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
      answer++;
    }
  }
  return answer;
};
const arr = [130, 135, 148, 140, 145, 150, 150, 153];
solution(arr);
