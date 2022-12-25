import { getRandomNumber, PrimeCheck } from '../tools.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateRound() {
  const n = getRandomNumber(2, 100);
  const result = PrimeCheck(n);

  const question = n;

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(rules, generateRound);
}
