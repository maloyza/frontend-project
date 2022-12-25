import { EvenCheck, getRandomNumber } from '../tools.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateRound() {
  const question = getRandomNumber(1, 100);
  const result = EvenCheck(question);

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(rules, generateRound);
}
