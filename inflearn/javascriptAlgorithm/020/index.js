const solution = (A, B) => {
  let answer = '';

  for (let i = 0; i < 5; i++) {
    if (A[i] === B[i]) answer += 'D';
    else if (
      (A[i] === 1 && B[i] === 3) ||
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 3 && B[i] === 2)
    ) {
      answer += 'A';
    } else {
      answer += 'B';
    }
  }

  return answer;
};
const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];
solution(A, B);

