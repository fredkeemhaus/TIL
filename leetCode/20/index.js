const isValid = (s) => {
  let stack = [];
  let open = { '(': ')', '{': '}', '[': ']' };
  let close = { ')': true, '}': true, ']': true };

  for (let char of s) {
    if (open[char]) {
      stack.push(char);
    } else if (close[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;
};
