const n = 72;

function getPrimeFactor(n) {
  let divider = 2;
  while (n != 1) {
    if (n % divider === 0) {
      console.log(divider);
      n /= divider;
    } else {
      divider++;
    }
  }
}

getPrimeFactor(n);

