const solution = (arr) => {
  // indexOf 방식
  // let answer = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === arr.indexOf(arr[i])) {
  //     answer.push(arr[i]);
  //   }
  // }

  // filter 방식
  let answer;
  answer = arr.filter((v, i) => arr.indexOf(v) === i);

  return answer;
};

const arr = ['good', 'time', 'good', 'time', 'student'];
solution(arr);

