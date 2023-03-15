import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

function randomNumber(min, max, parity) {
  const x = getRandomNumber(min, max);
  return x % 2 === parity ? x : randomNumber(min, max, parity);
}

function maxCommonDivisor(num1, num2) {
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
}

function generateRound() {
  const divisibleNumbers1 = randomNumber(1, 75, 0);
  const divisibleNumbers2 = randomNumber(1, 75, 0);
  const correctAnswer = maxCommonDivisor(divisibleNumbers1, divisibleNumbers2);

  const question = `${divisibleNumbers1} ${divisibleNumbers2}`;

  return [
    question,
    correctAnswer,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
