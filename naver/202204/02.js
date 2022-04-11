const A = [6, 1, 4, 6, 3, 2, 7, 4];
const K = 3;
const L = 2;

function solution(A, K, L) {
  if (A.length < K + L) return -1;
  let maxApples = 0;
  for (let i = 0, alice = K - 1; alice < A.length; ++i, ++alice) {
    const aliceApples = countApples(A, i, alice);
    // console.log("Alice: ", i, "--", alice, aliceApples);
    for (let j = 0, bob = L - 1; bob < A.length; ++j, ++bob) {
      if (bob < i || j > alice) {
        const bobApples = countApples(A, j, bob);
        //   console.log(aliceApples, bobApples);
        //   console.log("Bob: ", j, "--", bob, bobApples);
        maxApples = Math.max(maxApples, aliceApples + bobApples);
      }
    }
  }
  return maxApples;
}
function countApples(array, start, end) {
  let apples = 0;
  for (let i = start; i <= end; ++i) {
    apples += array[i];
  }
  return apples;
}

solution(A, K, L);

