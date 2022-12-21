import _ from 'lodash';
import { actionGreeting, actionAnswer } from '../index.js';

const rules = 'What is the result of the expression?';

let result;

function calculations(a, b, c) {
  switch (c) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return 0;
  }
}

function actionQuestionCalc() {
  const randNumbers = [_.random(1, 10), _.random(1, 10)];
  const randOperat = _.sample(['+', '-', '*']);
  result = calculations(randNumbers[0], randNumbers[1], randOperat);
  console.log(`Question: ${randNumbers[0]} ${randOperat} ${randNumbers[1]}`);
}

export default function startGameBrainCalc() {
  const userName = actionGreeting(rules);
  for (let i = 0; i < 3; i += 1) {
    actionQuestionCalc();
    actionAnswer(result);
  }
  console.log(`Congratulations, ${userName}!`);
}
