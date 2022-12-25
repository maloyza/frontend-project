import { calculate, getRandomNumber } from '../tools.js';
import runGame from '../index.js';

const rules = 'What is the result of the expression?';

function generateRound() {
  const randNumber1 = getRandomNumber(1, 10);
  const randNumber2 = getRandomNumber(1, 10);
  const randOperat = ['+', '-', '*'][getRandomNumber(0, 2)];
  const result = calculate(randNumber1, randNumber2, randOperat);

  const question = `${randNumber1} ${randOperat} ${randNumber2}`;

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(rules, generateRound);
}
