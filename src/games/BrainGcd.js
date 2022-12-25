import { maxCommonDivisor, randomEvenNumber } from '../tools.js';
import runGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

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
  runGame(rules, generateRound);
}
