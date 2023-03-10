import { getRandomNumber } from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeNumber(num) {
  return (2 ** num) % num === 2 % num;
}

function generateRound() {
  const question = getRandomNumber(2, 100);
  const result = isPrimeNumber(question) ? 'yes' : 'no';

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
