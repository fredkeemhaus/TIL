const solution = (s1, s2) => {
  let answer = 'YES';
  let sH = new Map();

  for (x of s1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of s2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
};

// const s1 = 'AbaAeCe';
// const s2 = 'baeeACA';
const s1 = 'abaCC';
const s2 = 'Caaab';

solution(s1, s2);

