const fs = `10`;
const number = fs.split('');

const numberSum = number.reduce((a, b) => a + b);

if (number[0] === '0' && number[1] !== 'x') {
  console.log(parseInt(numberSum, 8));
} else if (number[0] === '0' && number[1] === 'x') {
  console.log(parseInt(numberSum, 16));
} else {
  console.log(parseInt(numberSum));
}

