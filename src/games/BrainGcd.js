import { getRandomNumber } from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

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
  return 1;
}

function generateRound() {
  const divisibleNumbers1 = randomEvenNumber(1, 75);
  const divisibleNumbers2 = randomEvenNumber(1, 75);

  const minNum = Math.min(divisibleNumbers1, divisibleNumbers2);
  const result = maxCommonDivisor(divisibleNumbers1, divisibleNumbers2, minNum);

  const question = `${divisibleNumbers1} ${divisibleNumbers2}`;

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
