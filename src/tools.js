function getRandomNumber(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function calculate(a, b, c) {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: throw new Error(`Unknown order state: '${c}'!`);
  }
}

function randomEvenNumber(min, max) {
  const x = getRandomNumber(min, max);
  return x % 2 === 0 ? x : randomEvenNumber(min, max);
}

function maxCommonDivisor(num1, num2, minNum) {
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 0;
}

function EvenCheck(num) {
  let answer;
  if (num % 2 === 0) answer = 'yes';
  else answer = 'no';

  return answer;
}

function PrimeCheck(num) {
  let answer;
  if ((2 ** num) % num === 2 % num) answer = 'yes';
  else answer = 'no';

  return answer;
}

export {
  calculate,
  getRandomNumber,
  maxCommonDivisor,
  randomEvenNumber,
  EvenCheck,
  PrimeCheck,
};
