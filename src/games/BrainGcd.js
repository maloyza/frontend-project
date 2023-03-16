import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

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
  const divisibleNumbers1 = getRandomNumber(1, 75);
  const divisibleNumbers2 = getRandomNumber(1, 75);
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
