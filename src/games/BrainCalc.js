import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'What is the result of the expression?';

function calculate(num1, num2, result) {
  switch (result) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error(`Unknown operator: '${result}'!`);
  }
}

function generateRound() {
  const randNumber1 = getRandomNumber(1, 10);
  const randNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randOperat = operators[getRandomNumber(0, operators.length - 1)];
  const result = calculate(randNumber1, randNumber2, randOperat);

  const question = `${randNumber1} ${randOperat} ${randNumber2}`;

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
